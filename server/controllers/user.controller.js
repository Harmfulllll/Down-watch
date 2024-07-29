import apiResponse from "../utils/apiResponse.js";
import userModel from "../models/user.model.js";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(401)
        .json(new apiResponse(401, [], "Please fill all fields"));
    }
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res
        .status(401)
        .json(new apiResponse(401, [], "User already exists"));
    }
    const newUser = new userModel({ username, email, password });
    if (newUser) {
      newUser.generateJWT(res);
      await newUser.save();

      res.status(200).json(
        new apiResponse(
          200,
          {
            username: newUser.username,
            email: newUser.email,
          },
          "User registered successfully"
        )
      );
    } else {
      return res
        .status(500)
        .json(new apiResponse(500, [], "Invalid data. Please try again"));
    }
  } catch (error) {
    return res.status(500).json(new apiResponse(401, [], error.message));
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json(new apiResponse(401, [], "Please fill all fields"));
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json(new apiResponse(401, [], "User does not exist"));
    }
    const isMatch = await user.checkPassword(password);
    if (isMatch) {
      user.generateJWT(res);
      res.status(200).json(
        new apiResponse(
          200,
          [
            {
              username: user.username,
              email: user.email,
            },
          ],
          "User logged in successfully"
        )
      );
    } else {
      return res
        .status(401)
        .json(new apiResponse(401, [], "Invalid credentials"));
    }
  } catch (error) {
    return res.status(500).json(new apiResponse(401, [], error.message));
  }
};
const logout = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res
      .status(200)
      .json(new apiResponse(200, null, "User logged out successfully"));
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export { register, login, logout };
