const User = require("../models/User");
const Recipe = require('../models/Recipe')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidator, loginValidator } = require("../utils/validation");

// const users = async(req, res)=>{
//   let user = await User.find()
//   res.status(200).json({user})
// }

const register = async (req, res) => {
  const result = await registerValidator.validateAsync(req.body);
  const { fullName, userName, location, email, password } = result;
  console.log(result);

  // check if email is already in the database
  const alreadyExists = await User.findOne({ email });
  if (alreadyExists) {
    return res.status(400).json({ message: "Email already exists." });
  }

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 12);

  // create the user
  const user = await User.create({
    fullName,
    userName,
    location,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ user });
};

const login = async (req, res) => {
  const result = await loginValidator.validateAsync(req.body);
  const { email, password } = result;

  // check if email is in the database
  let user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // check for password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // get all recipes
  const recipes = await Recipe.find()

  // generate token
  const token = jwt.sign({ id: user._id }, "123456780", {
    expiresIn: "1h",
  });

  res.status(200).json({ token, user, recipes });
};

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"] || "";

  token = token.split(" ")[1];
  if (token) {
    const decodedToken = jwt.verify(token, "123456780");
    req.user = decodedToken.id;
    next();
  } else {
    res.status(403).json({ message: "Unauthotized" });
  }
};

const logOut = async (req, res) => {
  try {
    res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
    return res.json({ msg: "Logged out" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  register,
  login,
  verifyToken,
};
