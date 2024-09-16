import "dotenv/config";

import Product from "../models/Product.js";
import connectDB from "../config/mongoose.js";

connectDB();

async function productSeeder() {
  await Product.create({
    name: "Producto 1",
    detail: "Detalles del producto 1",
    price: 99.99,
  });
  await Product.create({
    name: "Producto 2",
    detail: "Detalles del producto 2",
    price: 149.99,
  });
  await Product.create({
    name: "Producto 3",
    detail: "Detalles del producto 3",
    price: 199.99,
  });

  console.log("[Seeder] Product created!");
  process.exit(1);
}

productSeeder();
