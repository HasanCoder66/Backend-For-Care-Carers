import express from "express";
import { register, login } from "../Controllers/authController.js";
const authRoutes = express.Router();

authRoutes.post("/signup", register);
authRoutes.post("/login", login);
// authRoutes.get("/forgetPass", forgetPass);
export default authRoutes;
