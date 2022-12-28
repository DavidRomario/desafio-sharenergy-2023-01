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
    //   console.log("criado", newUser);

    const savedUser = await newUser.save();
    // console.log("salvo", savedUser);

    res.status(201).send({
      message: "sucesso",
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
    const update = await userSchema.updateOne(
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
    return res.status(404).send("Usuario não encontrado");
  }
};

const deleteUsers = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userSchema.findById(userId);

    const deleteUserData = await userSchema.deleteOne({
      _id: userId,
    });

    return res.status(200).send({
      message: "Usuario deletado",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).send("Usuario não encontrado");
  }
};

module.exports = { allUser, createUser, updateUser, deleteUsers };
