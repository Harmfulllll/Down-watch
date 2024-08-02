import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice.js";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutUser = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const res = await axios.post("/api/v1/user/logout", {}, config);
      if (res.error) {
        throw new Error(res.error);
      }
      localStorage.removeItem("downWatch-user");
      dispatch(logout(res?.data));
      toast.success("Logged out successfully");
      Navigate("/login");
    } catch (error) {
      toast.error("Failed to logout");
    } finally {
      setLoading(false);
    }
  };
  return { loading, logoutUser };
}
