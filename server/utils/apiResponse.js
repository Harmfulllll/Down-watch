/*
 * Title: apiResponse.js
 * Description : API response class
 * Author: Tanvir Hassan Joy
 * Date: 2024-07-28 19:54:54
 */

/* API response class */

class apiResponse {
  /* 
        creates an instance of the apiResponse class
    */
  constructor(statusCode, data, message) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400 ? true : false;
  }
}

export default apiResponse;
