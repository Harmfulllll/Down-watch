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
import Bree from "bree";

/* import from other files */
import connectDB from "./database/db.js";
import userRoutes from "./routes/user.routes.js";
import siteRoutes from "./routes/site.routes.js";
import getStatus from "./jobs/getStatus.js";

/* config */
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/site", siteRoutes);

const port = process.env.PORT || 3000;
const bree = new Bree({
  jobs: [
    {
      name: "getStatus",
      interval: "5m",
    },
  ],
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    bree.start();
  })
  .catch((error) => {
    console.log(error);
  });
bree.on("worker created", (name, worker) => {
  if (name === "getStatus") {
    getStatus();
  }
});
