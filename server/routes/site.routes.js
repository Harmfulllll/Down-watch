import express from "express";
import verify from "../middlewares/verify.middleware.js";
import {
  addSite,
  deleteSite,
  getSites,
} from "../controllers/site.controller.js";

const router = express.Router();

router.post("/add-site", verify, addSite);
router.get("/get-sites", verify, getSites);
router.delete("/delete-site/:id", verify, deleteSite);

export default router;
