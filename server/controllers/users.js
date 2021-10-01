const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getUsers,
};
