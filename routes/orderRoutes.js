import { expressjwt } from "express-jwt";
import orderController from "../controllers/orderController.js";
import express from "express";
const router = express.Router();

router.get("/api/orders", orderController.getAll);
router.post(
  "/api/orders",
  expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  orderController.create
);

export default router;
