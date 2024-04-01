import  ResidentModal  from "../Models/ResidentModel.js";

//====================  NEW PRODUCT =========================//
export const createResident = async (req, res, next) => {
  const newResident = new ResidentModal(req.body);
  try {
    const saveResident = await newResident.save();
    res.status(200).send({
      status: "Successful",
      message: "Product Added Successfully",
      data: saveResident,
    });
  } catch (error) {
    next(error);
  }
};

// //UPDATE USER
// // /user/:userId
// export const updateProduct = async (req, res, next) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, {
//             $set: req.body
//         }, { new: true });
//         res.status(200).send({
//             status: "Successfull",
//             message: "Product Updated Successfully",
//             data: updatedProduct,
//         });
//     } catch (error) {
//         next(error)
//     }
// }

// //DELETE USER
// // /user/:userId

// export const deleteProduct = async (req, res, next) => {
//     try {
//         await Product.findByIdAndDelete(req.params.productId);
//         res.status(200).send({
//             status: "Successfull",
//             message: "Product deleted Successfully",
//         });
//     } catch (error) {
//         next(error)
//     }
// }

// //GET USER
// // /user/find/:userId

// export const getProduct = async (req, res, next) => {
//     try {
//         const product = await Product.findById(req.params.productId);
//         !product && res.status(404).send({
//             status: "Failed",
//             message: "Product not found",
//         });
//         res.status(200).send({
//             status: "Successfull",
//             message: "Product Found",
//             data: product
//         });
//     } catch (error) {
//         next(error)
//     }
// }

//GET USER
// /user/find
// export const getAllProducts = async (req, res, next) => {
//     const queryNew = req.query.new;
//     const queryCategory = req.query.category;
//     const queryTags = req.query.tag;
//     try {

//         let products;
//         if (queryNew) {
//             products = await Product.find().sort({ createdAt: -1 }).limit(5)
//         } else if (queryCategory) {
//             products = await Product.find({ categories: { $in: [queryCategory] } })
//         } else if (queryTags) {
//             products = await Product.find({ tags: { $in: [queryTags] } }).limit(4)
//         } else {
//             products = await Product.find();
//         }

//         res.status(200).send({
//             status: "Successfull",
//             message: "Products Found",
//             data: products
//         });
//     } catch (error) {
//         next(error)
//     }
// }
