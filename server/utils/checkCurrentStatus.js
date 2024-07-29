import fetch from "node-fetch";

const checkStatus = async (url) => {
  try {
    let result = await fetch(url);
    if (result.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default checkStatus;
