import express from "express";
import { verifyAdmin, verifyUser } from "../Utils/verifyToken.js";
import {
  createResident,
  updateResident,
//   deleteProduct,
//   getAllProducts,
//   getProduct,
} from "../Controllers/residentController.js";

const residentRoutes = express.Router();

//======================= CREATE PRODUCT ======================//
residentRoutes.post("/", verifyAdmin, createResident);

//======================= UPDATE PRODUCT ======================//
residentRoutes.put("/:residentId", verifyAdmin, updateResident);

//======================= DELETE PRODUCT ======================//
// residentRoutes.delete("/:productId", verifyAdmin, deleteProduct);

//======================= GET A PRODUCT ======================//
// residentRoutes.get("/find/:productId", getProduct);

//======================= GET ALL PRODUCTS ======================//
// residentRoutes.get("/find", getAllProducts);

export default residentRoutes;
