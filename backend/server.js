import app from "./src/app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./src/models/user.model.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

console.log("User model loaded:", User.modelName);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });