import { Timestamp } from "mongodb";
import mongoose from "mongoose";

import { Schema } from "mongoose";

const userSchema = new Schema({
userName : {
    type :String,
    required : true,
},
email : {
    type :String,
    required : true,
    unique : true
},
password : {
    type :String,
    required : true,
},
}, {timestamps : true}) ;

export default mongoose.model(
    'User', userSchema
)

