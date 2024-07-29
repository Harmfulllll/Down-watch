import express from "express";
import verify from "../middlewares/verify.middleware.js";
import { login, logout, register } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", verify, logout);

export default router;
