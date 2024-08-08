import jwt from "jsonwebtoken";
import User from "../models/user.js";
import asyncHandler from "./asyncHandler.js";
const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("Token received:", token); // Log the token

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded token:", decoded); // Log decoded token

      if (!decoded || !decoded.id) {
        return res
          .status(401)
          .json({ message: "Not authorized, invalid token" });
      }

      req.user = await User.findById(decoded.id).select("-password");
      console.log("User from token:", req.user); // Log the user

      if (!req.user) {
        return res.status(404).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      console.error("Error in auth middleware:", error.message);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
});

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Not authorized as an admin" });
  }
};

export { authenticate, authorizeAdmin };
