import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  brand: String,
  price: Number,
  category: String,
  sizes: [Number],
  image: String
});

export default mongoose.model("Product", productSchema);
