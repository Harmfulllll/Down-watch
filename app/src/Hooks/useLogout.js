import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const logout = async () => {
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
      toast.success("Logged out successfully");
      Navigate("/login");
    } catch (error) {
      toast.error("Failed to logout");
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
}
