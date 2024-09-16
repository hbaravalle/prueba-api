import userController from "../controllers/userController.js";
import express from "express";
const router = express.Router();

router.get("/api/users", userController.getAll);
router.get("/api/users/:id", userController.findById);
router.post("/api/users", userController.create);
router.patch("/api/users/:id", userController.update);
router.delete("/api/users/:id", userController.destroy);

export default router;
