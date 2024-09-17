import "dotenv/config";
import fs from "fs";
import path from "path"; //
import express from "express";
import connectDB from "./config/mongoose.js";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(express.json());

connectDB();

app.use(userRoutes);
app.use(authRoutes);
app.use(orderRoutes);

app.get("*", function (req, res) {
  return res.status(404).json("Not found");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`[Server] Server running at ${process.env.APP_PORT} port`);
});
