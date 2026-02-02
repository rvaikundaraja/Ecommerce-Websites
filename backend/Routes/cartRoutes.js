import express from "express";
import protect from "../Middleware/authMiddleware.js";
import { getCart, addToCart } from "../controllers/cartController.js";

const router = express.Router();

router.get("/", protect, getCart);
router.post("/", protect, addToCart);

export default router;
