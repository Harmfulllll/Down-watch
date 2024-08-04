import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addASite } from "../redux/siteSlice";
import useGetSites from "./useGetSites";
function useAddSite() {
  const { addLoading, setAddLoading } = useState(false);
  const { getAllSites } = useGetSites();
  const dispatch = useDispatch();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const addSite = async (url) => {
    try {
      const res = await axios.post(
        "/api/v1/site/add",
        {
          url,
        },
        config
      );
      if (res.error) throw new Error(res.error);
      dispatch(addASite(res?.data));
      toast.success(res?.data?.message || "Site added successfully");
      getAllSites();
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setAddLoading(false);
    }
  };
  return { addSite, addLoading };
}
export default useAddSite;
