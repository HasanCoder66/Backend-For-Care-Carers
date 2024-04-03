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

//======================= CREATE RESIDENTS ======================//
// http://localhost:8800/api/resident/
residentRoutes.post("/", verifyAdmin, createResident);

//======================= UPDATE RESIDENTS ======================//
// http://localhost:8800/api/resident/660b37d3da1211544662db30
residentRoutes.put("/:residentId", verifyAdmin, updateResident);

//======================= DELETE RESIDENTS ======================//
// http://localhost:8800/api/resident/660b37d3da1211544662db30
residentRoutes.delete("/:residentId", verifyAdmin, deleteResident);

//======================= GET A RESIDENTS ======================//
// http://localhost:8800/api/resident/find/660b413793cbd11706eb9a32
residentRoutes.get("/find/:residentId", getResident);

//======================= GET ALL RESIDENTS ======================//
//localhost:8800/api/resident/find/
http: residentRoutes.get("/find", getAllResidents);

export default residentRoutes;
