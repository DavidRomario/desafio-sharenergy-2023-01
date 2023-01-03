const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const jwt = require("../middleware/jwt");

router.use(jwt);
router.get("/all", userController.allUsers);
router.get("/:id", userController.getUserById);
router.post("/create", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUsers);

module.exports = router;
