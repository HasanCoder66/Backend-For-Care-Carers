import express from "express";
import { verifyAdmin, verifyUser } from "../Utils/verifyToken.js";
import {
  createResident,
//   deleteProduct,
//   getAllProducts,
//   getProduct,
//   updateProduct,
} from "../Controllers/residentController.js";

const residentRoutes = express.Router();

//======================= CREATE PRODUCT ======================//
residentRoutes.post("/", verifyAdmin, createResident);

//======================= UPDATE PRODUCT ======================//
// residentRoutes.put("/:productId", verifyAdmin, updateProduct);

//======================= DELETE PRODUCT ======================//
// residentRoutes.delete("/:productId", verifyAdmin, deleteProduct);

//======================= GET A PRODUCT ======================//
// residentRoutes.get("/find/:productId", getProduct);

//======================= GET ALL PRODUCTS ======================//
// residentRoutes.get("/find", getAllProducts);

export default residentRoutes;
