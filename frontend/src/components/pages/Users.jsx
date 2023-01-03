import React from "react";
import Default from "../templates/Default";

export default function Users() {
  return (
    <Default>
      <div id="all-content">
        <section id="section-form">
          <form name="meuForm" method="post" id="formulario">
            <label>
              <span>Nome Completo</span>
              <input type="text" className="input_text" name="nome" id="name" />
            </label>
            <label>
              <span>Email</span>
              <input
                type="text"
                className="input_text"
                name="email"
                id="email"
              />
            </label>
            <label>
              <span>Telefone</span>
              <input
                type="tel"
                className="input_text"
                name="telefone"
                required
                placeholder="(xx) xxxxx-xxxx"
                id="subject"
              />
            </label>
            <label>
              <span>Endereço</span>
              <input
                type="text"
                className="input_text"
                name="endereço"
                id="adress"
              />
            </label>
            <label>
              <span>CPF</span>
              <input type="text" className="input_text" name="cpf" id="cpf" />
            </label>
            <input type="button" className="update" value="Enviar" />
          </form>
        </section>
        <section id="user-view">
          <div className="list">
            <div className="user-data">
              <span>Nome</span>
              <span>Email</span>
              <span>Telefone</span>
              <span>Endereço</span>
              <span>CPF</span>
            </div>
            <div id="btn-container">
              <button className="update">Editar</button>
              <button className="update">Excluir</button>
            </div>
          </div>
        </section>
      </div>
    </Default>
  );
}
