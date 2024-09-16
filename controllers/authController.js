import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

async function token(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
        // Creamos un token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.json({ token });
      }
    }
    return res.json("Invalid credentials");
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
}

export default { token };
