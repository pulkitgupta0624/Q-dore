// Packages
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
// Files
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

// Configuration
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(helmet());
app.use(xss());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

// Routes
app.use("/api/users", userRoutes);
app.use("/api/send-email", mailRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// Static Files
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
