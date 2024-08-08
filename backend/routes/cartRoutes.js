import express from "express";
import { getCart, addToCart } from "../controllers/cartController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticate, getCart);
router.post("/", authenticate, addToCart);

export default router;
