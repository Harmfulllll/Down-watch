/*
 * Title: index.js
 * Description : Main server file
 * Author: Tanvir Hassan Joy
 * Date: 2024-07-28 15:58:51
 */

/* import dependencies */
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

/* import from other files */
import connectDB from "./database/db.js";

/* config */
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port 3000 ${port}`);
  });
});
