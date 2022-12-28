const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const loginController = require("../controllers/loginController");
const jwt = require("../middleware/jwt");

router.get("/all", userController.allUser);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.put("/login", jwt, loginController.login);
router.delete("/:id", userController.deleteUsers);

module.exports = { router };
