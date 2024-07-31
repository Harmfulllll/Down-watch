import apiResponse from "../utils/apiResponse.js";
import userModel from "../models/user.model.js";
import siteModel from "../models/website.model.js";
import validUrl from "valid-url";

const addSite = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res
        .status(401)
        .json(new apiResponse(401, [], "Please provide a URL"));
    }
    if (!validUrl.isUri(url)) {
      return res
        .status(401)
        .json(new apiResponse(401, [], "Please provide a valid URL"));
    }
    const siteExists = await siteModel.findOne({ url });
    if (siteExists) {
      const user = await userModel.findById(req.user.id);
      if (user.websites.includes(siteExists._id)) {
        return res
          .status(401)
          .json(new apiResponse(401, [], "Site already exists in your list"));
      }
      user.websites.push(siteExists._id);
      await user.save();
      return res.status(200).json(
        new apiResponse(
          200,
          {
            url: siteExists.url,
          },
          "Site added successfully"
        )
      );
    } else {
      const newSite = new siteModel({ url });
      if (newSite) {
        await newSite.save();
        const user = await userModel.findById(req.user.id);
        user.websites.push(newSite._id);
        await user.save();
        return res.status(200).json(
          new apiResponse(
            200,
            {
              url: newSite.url,
            },
            "Site added successfully"
          )
        );
      } else {
        return res
          .status(500)
          .json(new apiResponse(500, [], "Invalid data. Please try again"));
      }
    }
  } catch (error) {
    return res.status(500).json(new apiResponse(401, [], error.message));
  }
};

const getSites = async (req, res) => {
  try {
    const id = req.user.id;
    if (!id) {
      return res.status(401).json(new apiResponse(401, [], "User not found"));
    }
    const sites = await userModel.findById(id).populate("websites");
    if (!sites) {
      return res
        .status(401)
        .json(new apiResponse(401, [], "No sites found for this user"));
    }
    return res.status(200).json(
      new apiResponse(
        200,
        [
          {
            count: sites.websites.length,
            sites: sites.websites,
          },
        ],
        "Sites found successfully"
      )
    );
  } catch (error) {
    return res.status(500).json(new apiResponse(401, [], error.message));
  }
};

const deleteSite = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    if (!id) {
      return res
        .status(401)
        .json(new apiResponse(401, [], "Site id not specified"));
    }
    const user = await userModel.findOne({ _id: userId });
    if (!user) {
      return res.status(401).json(new apiResponse(401, [], "User not found"));
    }
    const siteExistsInUser = user.websites.includes(id);
    if (!siteExistsInUser) {
      return res
        .status(401)
        .json(new apiResponse(401, [], "Site does not exist in your list"));
    }
    const site = await siteModel.findById(id);
    if (!site) {
      return res.status(401).json(new apiResponse(401, [], "Site not found"));
    } else {
      user.websites = await user.websites.filter(
        (website) => website.toString() !== id
      );
      await user.save();
      const url = site.url;
      const siteStillExists = await userModel.findOne({ websites: id });
      if (!siteStillExists) {
        await siteModel.findByIdAndDelete(id);
      }
      return res.status(200).json(
        new apiResponse(
          200,
          {
            url,
          },
          "Site deleted successfully from your list"
        )
      );
    }
  } catch (error) {
    return res.status(500).json(new apiResponse(401, [], error.message));
  }
};

export { addSite, getSites, deleteSite };
