// export const forgetPass = async (req, res, next) => {};
import nodemailer from "nodemailer"
import User from "../Models/UserModel.js";
import bcryptjs from "bcryptjs"
import { createError } from "../Utils/error.js";
import jwt from "jsonwebtoken"

const { genSalt, hash } = bcryptjs

//=========================== USER REGISTERATON ====================//
// localhost:8800/api/auth/signup
export const register = async (req, res, next) => {
  try {
    //==========HASHING PASSWORD USING BCRYPTJS===================//
    const salt = await genSalt(12);
    const hashPassword = await hash(req.body.password, salt);


    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword, // CryptoJS

      // profileImage: req.body?.profileImage,
      isAdmin: req.body.isAdmin,
    });
  

    //REMOVING CRITICAL INFO FROM THE DATA TO SEND THE RESPONSE

    const { password, isAdmin, ...other } = newUser._doc;

    //SAVING THE USER
    await newUser.save();

    res.status(200).send({
      status: "Successful",
      message: "Registration Successful",
      data: other,
    });
  } catch (error) {
    next(error);
  }
};

//=========================== USER LOGIN ====================//
//localhost:8800/api/auth/login
export async function login(req, res, next) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            // next(404, "User not found")
            next(createError(404, "User not found"))
            return
        };
        const isCorrect = await bcryptjs.compare(req.body.password, user.password);
        if (!isCorrect) {
            // next(400, "Incorrect email or password")
            next(createError(400, "Incorrect email or password"))
            return
        };
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT, { expiresIn: '24h' });
        const { password, isAdmin, ...other } = user._doc;


        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).send({
            status: "Success",
            message: "User sign in successfully",
            data: other,
            access_token: token
        });
    } catch (error) {
        // next(error.status, error.message)
        next(createError(error.status, error.message))
    }
}

//=========================== USER FORGOT PASSWORD ====================//
//localhost:8800/api/auth/login
export async function forgotPassword(req, res, next) {
    try {
        const { email } = req.body;
        if (email) {
            const user = await User.findOne({ email: email })
            // console.log(user)
            if (user) {
                const secret = user._id + process.env.JWT
                const token = jwt.sign({ secret }, process.env.JWT, { expiresIn: "30m" })
                const link = `http:localhost:8800/api/auth/resetpassword/usertoken/${token}`
                const transport = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.NODEMAILER_USER,
                        pass: process.env.NODEMAILER_PASS
                    }
                })

                const mailOptions = {
                    from: process.env.EMAIL_FROM,
                    to: process.env.EMAIL_TO,
                    subject: "reset password link",
                    text: `Please click on the following link ${link} to reset your password`
                }

                transport.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        console.log(err.message)
                        return res.status(400).send({
                            status: "Failed",
                            message: err.message
                        })
                    } else {
                        console.log("email send" + info.response)
                        return res.status(200).send({
                            status: "Success",
                            message: "Reset password link generated"
                        })
                    }
                })
            }
        } else {
            console.log("no user found")
        }
    } catch (error) {
        next(createError(error.status, error.message))
    }
}