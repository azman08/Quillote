import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import noteRoutes from "./routes/note.route.js";

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB ;)");
  })
  .catch((err) => {
    console.log("Failed to Connect to MongoDB", err);
  });

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is Listening on Server : ${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/note", noteRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
