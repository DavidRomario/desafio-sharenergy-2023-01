const adminSchema = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const login = async (req, res) => {
  try {
    const findAdmin = await adminSchema.findOne({
      username: req.body.username,
    });
    if (!findAdmin) {
      return res.status(401).json({
        success: false,
        message: "User not found",
        payload: [],
      });
    }
    const validPassoword = bcrypt.compareSync(
      req.body.password,
      findAdmin.password
    );

    if (!validPassoword) {
      return res.status(401).json({
        success: false,
        message: "Login not authorized",
        payload: [],
      });
    }

    const token = jwt.sign({ date: new Date() }, SECRET);

    return res.status(200).json({
      success: true,
      message: "success on login",
      payload: [token],
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      payload: [],
    });
  }
};

module.exports = {
  login,
};
