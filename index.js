import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoute.js";

const app = express();
dotenv.config();
const PORT = 8800;


app.use('/api/auth' , authRoutes)





const BackendConnect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("BackEnd Connected");
    })
    .catch((error) => {
      throw error;
    });
};





app.listen(PORT, () => {
  BackendConnect();
  console.log(`Server listening on this ${PORT}`);
});
