const userSchema = require("../models/userModel");

const allUsers = async (req, res) => {
  try {
    const users = await userSchema.find({
      deletedAt: null,
    });

    return res.status(200).json({
      success: true,
      message: "List of users",
      payload: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      payload: [],
      message: "Internal server error",
    });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userSchema.findOne({
      $and: [{ _id: userId }, { deletedAt: null }],
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        payload: [],
        message: "User not found.",
      });
    } else {
      return res.status(200).json({
        success: true,
        payload: user,
        message: "User returned with success.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      payload: [],
      message: "Internal server error",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new userSchema();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.telephone = req.body.telephone;
    newUser.address = req.body.address;
    newUser.cpf = req.body.cpf;

    const verifyData = await userSchema.findOne({
      $or: [{ cpf: req.body.cpf }, { email: req.body.email }],
    });

    if (verifyData !== null) {
      return res.status(409).json({
        success: false,
        payload: [],
        message: "User already exists",
      });
    }

    const savedUser = await newUser.save();

    return res.status(200).json({
      success: true,
      payload: [savedUser],
      message: "User created with success.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      payload: [],
      message: "Internal server error",
    });
  }
};

const updateUser = async (req, res) => {
  const body = req.body;
  const userId = req.params.id;
  const name = body.name;
  const email = body.email;
  const telephone = body.telephone;
  const address = body.address;
  const cpf = body.cpf;

  try {
    const user = await userSchema.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        payload: [],
        message: "User not found.",
      });
    }

    await userSchema.updateOne(
      {
        _id: userId,
      },
      {
        name: name,
        email: email,
        telephone: telephone,
        address: address,
        cpf: cpf,
      }
    );

    const newUser = await userSchema.findById(userId);

    return res.status(200).json({
      success: true,
      payload: [newUser],
      message: "User updated with success.",
    });
  } catch {
    console.log(error);
    return res.status(500).json({
      success: false,
      payload: [],
      message: "Internal server error",
    });
  }
};

const deleteUsers = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userSchema.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        payload: [],
        message: "User not found.",
      });
    }

    await userSchema.updateOne(
      {
        _id: userId,
      },
      {
        deletedAt: new Date(),
      }
    );

    return res.status(200).json({
      success: true,
      payload: [],
      message: "User deleted with success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      payload: [],
      message: "Internal server error",
    });
  }
};

module.exports = { allUsers, createUser, updateUser, deleteUsers, getUserById };
