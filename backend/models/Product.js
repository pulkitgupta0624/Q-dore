import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: String,
  heading: String,
  image: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
