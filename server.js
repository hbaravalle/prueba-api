import "dotenv/config";
import fs from "fs";
import path from "path"; //
import express from "express";
import connectDB from "./config/mongoose.js";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());

connectDB();

const uploadDir = path.join(import.meta.dirname, "public/avatars");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use(userRoutes);
app.use(authRoutes);
app.use(orderRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log(`[Server] Server running at ${process.env.APP_PORT} port`);
});
