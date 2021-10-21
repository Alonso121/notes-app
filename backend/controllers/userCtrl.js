const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  registerUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      //Check for data validation

      if (!username || !email || !password)
        return res.status(400).json({ msg: "Please provide all fields!" });

      if (username.length < 3)
        return res
          .status(400)
          .json({ msg: "Username must be longer than 3 characters" });

      const user = await Users.findOne({ email: email });
      if (user)
        return res.status(400).json({
          msg: "There is already a user with that email. Please proceed to login.",
        });

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
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      //Check for data validation
      if (!email || !password)
        return res.status(400).json({ msg: "Please provide all fields!" });

      const user = await Users.findOne({ email: email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "User does not exist! Please Register!" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Incorrect username or password!" });

      //if login is successful create access token
      const payload = { id: user._id, name: user.username };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });
      res.json({ token, username: user.username });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = userCtrl;
