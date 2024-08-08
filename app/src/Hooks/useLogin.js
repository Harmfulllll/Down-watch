import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice.js";
function useLogin() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = async ({ email, password }) => {
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
      localStorage.setItem("downWatch-user", JSON.stringify(res?.data));
      console.log(res?.data);
      dispatch(login(res?.data));
      navigate("/dashboard");
      toast.success("Login successful");
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  return { loginUser, loading };
}
export default useLogin;
