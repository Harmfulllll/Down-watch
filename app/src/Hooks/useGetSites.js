import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getSites } from "../redux/siteSlice.js";

function useGetSites() {
  const [sitesLoading, setSitesLoading] = useState(false);
  const dispatch = useDispatch();
  const config = {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  };
  const getAllSites = async () => {
    try {
      const res = await axios.get("/api/v1/site/get-all", {}, config);
      if (res.error) throw new Error(res.error);
      dispatch(getSites(res?.data));
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setSitesLoading(false);
    }
  };
  return { sitesLoading, getAllSites };
}
export default useGetSites;
