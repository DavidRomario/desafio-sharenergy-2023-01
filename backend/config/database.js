const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost:27018/users";

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco conectado");
  } catch (error) {
    console.error("Erro: ", error.message);
  }
};

module.exports = {
  connect,
};
