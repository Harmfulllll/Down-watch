/*
 * Title: index.js
 * Description : Main server file
 * Author: Tanvir Hassan Joy
 * Date: 2024-07-28 15:58:51
 */

/* import dependencies */
import express from "express";

/* import from other files */
import connectDB from "./database/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port 3000 ${port}`);
  });
});
