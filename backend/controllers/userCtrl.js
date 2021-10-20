const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  registerUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await Users.findOne({ email: email });
      if (user)
        return res.status(400).json({
          msg: "There is already a user with that email. Please proceed to login.",
        });
      if (!username || !email || !password)
        return res.status(400).json({ msg: "Please provide all fields!" });

      if (username.length < 3)
        return res
          .status(400)
          .json({ msg: "Username must be longer than 3 characters" });

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        username,
        email,
        password: passwordHash,
      });
      await newUser.save();
      res.json({ msg: "Registered successfully!" });
    } catch (error) {
      return res.json({ msg: error.message });
    }
  },
};

module.exports = userCtrl;
