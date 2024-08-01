import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function useLogin() {
  const [loading, setLoading] = useState(false);

  const login = async ({ email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      setLoading(true);
      const res = await axios.post(
        "/api/v1/user/login",
        {
          email,
          password,
        },
        config
      );
      if (res.error) throw new Error(res.error);
      toast.success("Login successful");
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
}
export default useLogin;
