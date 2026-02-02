import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: [
    {
      product: Object,
      quantity: Number
    }
  ]
});

export default mongoose.model("Cart", cartSchema);
