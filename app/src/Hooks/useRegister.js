import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useRegister() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async ({ username, email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    };
    try {
      setLoading(true);
      const res = await axios.post(
        "/api/v1/user/register",
        { username, email, password },
        config
      );
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long", {
          duration: 3000,
          position: "top-center",
          style: {
            background: "red",
            color: "white",
          },
        });
        return false;
      }
      if (res.error) {
        throw new Error(res.error);
      }

      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        style: {
          background: "red",
          color: "white",
        },
      });
    } finally {
      setLoading(false);
    }
  };
  return { register, loading };
}

export default useRegister;
