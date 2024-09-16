import Order from "../models/Order.js";
import Product from "../models/Product.js";

async function getAll(req, res) {
  try {
    const orders = await Order.find()
      .populate("user", ["-password"])
      .populate("products.product");
    return res.json(orders);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
}

async function findById(req, res) {}

async function create(req, res) {
  try {
    const newOrder = await Order.create({
      products: req.body.products,
      user: req.auth.id,
      total: req.body.total,
      shippingAdress: req.body.shippingAdress,
      paymentMethod: req.body.paymentMethod,
    });
    return res.json("Order created!");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
}

async function update(req, res) {}

async function destroy(req, res) {}

export default { create, getAll };
