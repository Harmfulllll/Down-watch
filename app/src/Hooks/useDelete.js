import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteSite } from "../redux/siteSlice.js";
import useGetSites from "./useGetSites";
function useDelete() {
  const sites = useSelector((state) => state.site.site);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { getAllSites } = useGetSites();
  const dispatch = useDispatch();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const deleteData = async (id) => {
    try {
      /*    const updatedSites = sites.filter((site) => site._id !== id);
      dispatch(deleteSite(updatedSites)); */
      const res = await axios.delete(`/api/v1/site/delete/${id}`, {}, config);
      if (res.error) throw new Error(res.error);
      dispatch(deleteSite(res?.data));
      toast.success("Site deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred");
      /*     dispatch(deleteSite(sites)); */
    } finally {
      setDeleteLoading(false);
    }
  };
  return { deleteData, deleteLoading };
}
export default useDelete;
