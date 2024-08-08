import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", createUser);
router.post("/login", loginUser);

// Protected routes
router.post("/logout", authenticate, logoutCurrentUser);
router.get("/", authenticate, authorizeAdmin, getAllUsers); // Only admin can get all users
router.get("/profile", authenticate, getCurrentUserProfile);
router.put("/profile", authenticate, updateCurrentUserProfile);

export default router;
