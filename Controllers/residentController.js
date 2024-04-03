import Resident from "../Models/ResidentModel.js";

//====================  NEW RESIDENT =========================//
export const createResident = async (req, res, next) => {
  const newResident = new Resident(req.body);
  try {
    const saveResident = await newResident.save();
    res.status(200).send({
      status: "Successful",
      message: "Resident Added Successfully",
      data: saveResident,
    });
  } catch (error) {
    next(error);
  }
};

// //UPDATE RESIDENT
// // /user/:RESIDENTID
export const updateResident = async (req, res, next) => {
  try {
    const updateResident = await Resident.findByIdAndUpdate(
      req.params.residentId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({
      status: "Successful",
      message: "Resident Updated Successfully",
      data: updateResident,
    });
  } catch (error) {
    next(error);
  }
};

// //DELETE RESIDENT
// // /user/:userId

export const deleteResident = async (req, res, next) => {
  try {
    await Resident.findByIdAndDelete(req.params.residentId);
    res.status(200).send({
      status: "Successful",
      message: "Resident deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// //GET RESIDENT
// // /user/find/:userId

export const getResident = async (req, res, next) => {
    try {
        const resident = await Resident.findById(req.params.residentId);
        !resident && res.status(404).send({
            status: "Failed",
            message: "Resident not found",
        });
        res.status(200).send({
            status: "Successful",
            message: "Resident Found",
            data: resident
        });
    } catch (error) {
        next(error)
    }
}

//GET RESIDENT
// /user/find
    export const getAllResidents = async (req, res, next) => {
        try {
          // Database query to retrieve all residents
          const residents = await Resident.find();
          
          // Sending the retrieved residents as response
          res.status(200).json({
            status: "Success",
            message: "All residents retrieved successfully",
            data: residents,
          });
        } catch (error) {
          // Handling errors
          console.error("Error while retrieving residents:", error);
          res.status(500).json({
            status: "Error",
            message: "Failed to retrieve residents",
            error: error.message,
          });
        }
      };
    // const queryNew = req.query.new;
    // const queryCategory = req.query.category;
    // const queryTags = req.query.tag;
    // try {

    //     let products;
    //     if (queryNew) {
    //         products = await Product.find().sort({ createdAt: -1 }).limit(5)
    //     } else if (queryCategory) {
    //         products = await Product.find({ categories: { $in: [queryCategory] } })
    //     } else if (queryTags) {
    //         products = await Product.find({ tags: { $in: [queryTags] } }).limit(4)
    //     } else {
    //         products = await Product.find();
    //     }

    //     res.status(200).send({
    //         status: "Successfull",
    //         message: "Products Found",
    //         data: products
    //     });
    // } catch (error) {
    //     next(error)
    // }
