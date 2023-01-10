import React, { useState, useEffect } from "react";
import Default from "../templates/Default";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [singleUser, setSingleUser] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCpf] = useState("");

  async function getUsers() {
    const response = await axios.get("http://localhost:3010/users/all", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    response.data.success ? setIsLoading(false) : setIsLoading(true);
    setUsers(response.data.payload);
  }

  useEffect(() => {
    getUsers();
  }, []);

  function editUser(id) {
    setIsEditing(true);

    setSingleUser(users.filter((user) => user._id === id)[0]);

    setTimeout(() => {
      setName(singleUser.name);
      setEmail(singleUser.email);
      setTelephone(singleUser.telephone);
      setPassword(singleUser.password);
      setAddress(singleUser.address);
      setCpf(singleUser.cpf);
    }, 1000);
  }

  async function submitForm() {
    const body = {
      name,
      email,
      telephone,
      password,
      address,
      cpf,
    };
    if (isEditing) {
      await axios.put(`http://localhost:3010/users/${singleUser._id}`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
    } else {
      await axios.post("http://localhost:3010/users/create", body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
    }

    window.location.reload();
  }

  async function deleteUser(id) {
    await axios.delete(`http://localhost:3010/users/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    window.location.reload();
  }

  return isLoading ? (
    <div></div>
  ) : (
    <Default>
      <div id="all-content">
        <section id="section-form">
          <form name="meuForm" method="post" id="formulario">
            <label>
              <span>Nome Completo</span>
              <input
                type="text"
                value={name}
                className="input_text"
                name="nome"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                value={email}
                type="text"
                className="input_text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Telefone</span>
              <input
                value={telephone}
                type="tel"
                className="input_text"
                name="telefone"
                required
                placeholder="(xx) xxxxx-xxxx"
                id="subject"
                onChange={(e) => setTelephone(e.target.value)}
              />
            </label>
            <label>
              <span>Endereço</span>
              <input
                value={address}
                type="text"
                className="input_text"
                name="endereço"
                id="adress"
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <label>
              <span>CPF</span>
              <input
                type="text"
                value={cpf}
                className="input_text"
                name="cpf"
                id="cpf"
                onChange={(e) => setCpf(e.target.value)}
              />
            </label>
            <input
              type="button"
              className="update"
              value="Enviar"
              onClick={submitForm}
            />
          </form>
        </section>
        <section id="user-view">
          {users.map((user) => (
            <div className="list">
              <div className="user-data">
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.telephone}</span>
                <span>{user.address}</span>
                <span>{user.cpf}</span>
              </div>
              <div id="btn-container">
                <button className="update" onClick={() => editUser(user._id)}>
                  Editar
                </button>
                <button className="update" onClick={() => deleteUser(user._id)}>
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Default>
  );
}
