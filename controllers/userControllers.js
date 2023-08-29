const User = require('../Models/userModel');
const generateToken = require('../config/generateToken');
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, phoneNo, password } = req.body;
  if (!name || !email || !phoneNo || !password) {
    res.status(400);
    throw new Error('please fill all the fields.');
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(409);
    throw new Error('User already exists.');
  }

  const user = await User.create({ name, email, phoneNo, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNo: user.phoneNo,
      // profile: user.profile,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Failed to generate user.');
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profile: user.profile,
      token: generateToken(user._id),
    });
    console.log('Login successful');
  } else {
    res.status(401);
    throw new Error('Login failed');
  }
});

module.exports = { registerUser, authUser };
