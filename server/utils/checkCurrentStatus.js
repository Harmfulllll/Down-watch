import fetch from "node-fetch";

const checkStatus = async (url) => {
  try {
    let result = await fetch(url);
    if (result.status === 200) {
      return "up";
    }
    return "down";
  } catch (error) {
    return "down";
  }
};

export default checkStatus;
