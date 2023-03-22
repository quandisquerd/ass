import mongoose from "mongoose";

const productShema=mongoose.Schema({
    name:String,
    price:Number,
    desc:String,
    status:Boolean,
    quanty:Number
})
export default mongoose.model("products", productShema)