import User from "../models/User.js";

async function getAll(req, res) {
  try {
    const users = await User.find().select("-password");
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
}

async function findById(req, res) {}

async function create(req, res) {
  try {
    const { firstName, lastName, email, password, age } = req.body;
    const avatar = req.file.filename;

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      age,
      avatar,
    });

    return res.status(201).json("User created!");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
}

async function update(req, res) {}

async function destroy(req, res) {}

export default {
  getAll,
  findById,
  create,
  update,
  destroy,
};
