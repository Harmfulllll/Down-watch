import jwt from "jsonwebtoken";
import apiResponse from "../utils/apiResponse.js";
import userModel from "../models/user.model.js";

const verify = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json(new apiResponse(401, null, "Unauthorized"));
    }
    const data = jwt.verify(token, process.env.JWT_SECRET);

    if (!data) {
      return res.status(401).json(new apiResponse(401, null, "Invalid token"));
    }
    const user = await userModel.findById(data.id).select("-password");

    if (!user) {
      return res.status(401).json(new apiResponse(401, null, "User not found"));
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json(new apiResponse(500, null, error.message));
  }
};

export default verify;
