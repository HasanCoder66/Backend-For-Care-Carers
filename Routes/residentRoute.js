import express from "express";
import { verifyAdmin, verifyUser } from "../Utils/verifyToken.js";
import {
  createResident,
  updateResident,
  deleteResident,
    getResident,
  getAllResidents,
} from "../Controllers/residentController.js";

const residentRoutes = express.Router();

//======================= CREATE PRODUCT ======================//
residentRoutes.post("/", verifyAdmin, createResident);

//======================= UPDATE PRODUCT ======================//
residentRoutes.put("/:residentId", verifyAdmin, updateResident);

//======================= DELETE PRODUCT ======================//
residentRoutes.delete("/:residentId", verifyAdmin, deleteResident);

//======================= GET A PRODUCT ======================//
residentRoutes.get("/find/:residentId", getResident);

//======================= GET ALL PRODUCTS ======================//
residentRoutes.get("/find", getAllResidents);

export default residentRoutes;
