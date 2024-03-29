// import UserModel from "../Models/UserModel";

export const signup = async (req, res, next) => {

    // const newUser = new UserModel({
    //     ...req.body , password 
    // }) 
    //// Hashed Password
    const salt = await bcryptjs.genSalt(15)
    const hashedPassword = await bcryptjs.hash(req.body.password , salt)
};
export const login = async (req, res, next) => {};
export const forgetPass = async (req, res, next) => {};
