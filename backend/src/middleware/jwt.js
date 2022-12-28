const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

function auth(req, res, next) {
  const authHeader = req.get("authorization");
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send("Erro no header");
  }

  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(401).send("Não autorizado");
    }
    next();
  });
}

module.exports = { auth };
