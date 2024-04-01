import express from "express";
import {
  register,
  login,
  forgotPassword,
} from "../Controllers/authController.js";
const authRoutes = express.Router();

authRoutes.post("/signup", register);
authRoutes.post("/login", login);
authRoutes.get("/forgetPass", forgotPassword);

export default authRoutes;
