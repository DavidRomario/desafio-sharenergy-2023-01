const adminSchema = require("../models/adminModel");
const bcrypt = require("bcrypt");
const database = require("../config/database");

const createAdmin = async (req, res) => {
  database.connect();
  const newAdmin = new adminSchema();
  const hashedPassword = bcrypt.hashSync("sh@r3n3rgy", 10);

  newAdmin.username = "desafiosharenergy";
  newAdmin.password = hashedPassword;

  await newAdmin.save();
  console.log("Run create admin user with success.");
};

createAdmin();
