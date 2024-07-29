import { getAllSites } from "../controllers/site.controller.js";
import checkStatus from "../utils/checkCurrentStatus.js";

async function main() {
  const data = await getAllSites();

  data.foreach(async (site) => {
    const url = site.url;
    const recentStatus = site.status;
    const status = await checkStatus(url);
    console.log(status, recentStatus);
    if (status !== recentStatus) {
      if (status) {
        console.log(`Site ${url} is up`);
      } else {
        console.log(`Site ${url} is down`);
      }

      // Update the status in the database
      site.status = status;
      await site.save();
    }
  });
}
main();
