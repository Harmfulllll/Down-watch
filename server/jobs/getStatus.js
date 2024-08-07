import mongoose from "mongoose";
import siteModel from "../models/website.model.js";
import userModel from "../models/user.model.js";
import checkStatus from "../utils/checkCurrentStatus.js";
import sendMail from "../utils/sendMail.js";
/* import { getAllSites } from "../controllers/site.controller.js"; */

async function main() {
  try {
    console.log("Checking status of all sites");
    const data = await siteModel.find({});

    for (const site of data) {
      try {
        const url = site.url;
        const recentStatus = site.status;

        const status = await checkStatus(url);
        console.log(status, recentStatus);
        if (status !== recentStatus) {
          const users = await userModel.find({ websites: site._id });
          const emails = users.map((user) => user.email);
          if (status === "up") {
            /* console.log(`Site ${url} is up`); */
            emails.forEach((email) => {
              sendMail(
                email,
                site,
                "Hurray!!!Your following websites are back up"
              );
            });
          } else {
            /*          console.log(`Site ${url} is down`); */
            emails.forEach((email) => {
              sendMail(email, site, "Oops!!!Your following websites are down");
            });
          }

          // Update the status in the database
          site.status = status;
          await site.save();
        }
      } catch (error) {
        console.error(`Error processing site ${site.url}:`, error);
      }
    }
  } catch (error) {
    console.log("Error fetching sites", error.message);
  }
}

export default main;
