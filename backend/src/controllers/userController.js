const userSchema = require("../models/userModel");
const { use } = require("../routes");

const allUser = async (req, res) => {
  //
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
        message: "User already exists",
        payload: [],
      });
    }

    const savedUser = await newUser.save();

    res.status(201).json({
      message: "success",
      savedUser,
    });
  } catch (error) {
    console.log(error);
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
        message: "Usario nao encontrado",
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

    return res.status(200).send({
      message: "usuário atualizado com sucesso",
      newUser,
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
        message: "Usario nao encontrado",
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

    return res.status(200).send({
      message: "Usuario deletado",
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

module.exports = { allUser, createUser, updateUser, deleteUsers };
