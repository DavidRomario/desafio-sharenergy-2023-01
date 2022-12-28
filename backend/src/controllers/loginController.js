const adminSchema = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const login = (req, res) => {
  //
};

module.exports = { login };
