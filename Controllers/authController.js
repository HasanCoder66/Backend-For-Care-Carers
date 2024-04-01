// export const login = async (req, res, next) => {};
// export const forgetPass = async (req, res, next) => {};

import User from "../Models/UserModel.js";
import bcryptjs from "bcryptjs"
// import CryptoJS from "crypto-js";
// import { createError } from "../Utils/error.js";
// import Jwt from "jsonwebtoken"

const { genSalt, hash } = bcryptjs

//=========================== USER REGISTERATON ====================//
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
// export const login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email }); //FIND USER IN DB

//     if (!user) {
//     //   next(createError(401, "Wrong Credentials!")); //if user not found
//       return;
//     }

//     const decryptedPassword = CryptoJS.AES.decrypt(
//       user.password,
//       process.env.CRYPTOJS_KEY
//     ).toString(CryptoJS.enc.Utf8);
//     console.log(decryptedPassword);

//     if (decryptedPassword !== req.body.password) {
//     //   next(createError(401, "Wrong Credentials!")); //if user's password is wrong
//       return;
//     }

//     const token = Jwt.sign({ user: user }, process.env.JWT_SECRET_KEY, {
//       expiresIn: "24h",
//     }); //JWT creating token for verification, passing the user

//     const { password, isAdmin, ...other } = user._doc; //REMOVING CRITICAL INFO FROM THE DATA TO SEND THE RESPONSE

//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .send({
//         status: "Successfull",
//         message: "Login Successfull",
//         data: other,
//         access_token: token,
//       });
//   } catch (error) {
//     next(error);
//   }
// };
