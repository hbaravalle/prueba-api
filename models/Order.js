import mongoose from "mongoose";

// VIRTUALS

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    total: Number,
    shippingAdress: String,
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal"],
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
