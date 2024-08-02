import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
function useDelete() {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const deleteData = async (url) => {
    try {
      const res = await axios.delete("/api/v1/site/delete/:id", {}, config);
      if (res.error) throw new Error(res.error);
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setDeleteLoading(false);
    }
  };
  return { deleteData, deleteLoading };
}
export default useDelete;
