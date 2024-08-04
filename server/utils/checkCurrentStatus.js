import axios from "axios";

const checkStatus = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status >= 200 && response.status < 300) {
      return "up";
    } else {
      return "down";
    }
  } catch (error) {
    return "down";
  }
};

export default checkStatus;
