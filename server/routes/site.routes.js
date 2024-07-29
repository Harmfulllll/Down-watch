import express from "express";
import verify from "../middlewares/verify.middleware.js";
import {
  addSite,
  deleteSite,
  getAllSites,
  getSites,
} from "../controllers/site.controller.js";

const router = express.Router();

router.post("/add", verify, addSite);
router.get("/get-all", verify, getSites);
router.delete("/delete/:id", verify, deleteSite);
router.get("/get", getAllSites);

export default router;
