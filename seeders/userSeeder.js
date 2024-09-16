import "dotenv/config";
import User from "../models/User.js";
import connectDB from "../config/mongoose.js";

connectDB();

async function userSeeder() {
  await User.create({
    firstName: "Leia",
    lastName: "Organa",
    email: "leia@starwars.com",
    password: process.env.SEEDER_USER_PASSWORD,
    age: 30,
  });

  console.log("[Seeder] User created!");
  process.exit(1);
}

userSeeder();
