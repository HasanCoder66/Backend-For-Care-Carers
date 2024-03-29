import express from "express";
import { signup, login, forgetPass } from "../Controllers/authController.js";
const authRoutes = express.Router();

authRoutes.post("/signup", signup);
// authRoutes.post("/login", login);
// authRoutes.get("/forgetPass", forgetPass);
export default authRoutes;
