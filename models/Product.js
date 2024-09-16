import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: String,
    detail: String,
    price: Number,
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
