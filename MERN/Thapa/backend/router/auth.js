const express = require("express");
const router = express.Router();
const connectDB = require("../config/dbConn");
connectDB();

const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello World from router");
});

router.post("/signin", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Incomplete credentials" });
  }

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({ error: "Email already Exists" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });
    await user.save();

    res.status(201).json({ message: "New User Created" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;