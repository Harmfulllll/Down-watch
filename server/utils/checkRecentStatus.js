import axios from "axios";
import { getAllSites } from "../controllers/site.controller";

const data = await getAllSites();
