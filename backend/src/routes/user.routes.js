import express from "express";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// REAL PROFILE
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Profile fetched",
    user: req.user
  });
});

export default router;