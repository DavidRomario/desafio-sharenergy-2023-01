import React, { useState, useEffect, useContext } from "react";
import { useApp } from "../../hooks/appContent";
import Default from "../templates/Default";

export default function RandomUserList() {
  const { input } = useApp();
  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(1);

  const users = usersData.filter(({ name, email, login }) => {
    const fullName = `${name.title.toLowerCase()} ${name.first.toLowerCase()} ${name.last.toLowerCase()}`;

    return (
      fullName.includes(input) ||
      email.includes(input) ||
      login.username.includes(input)
    );
  });

  useEffect(() => {
    async function getUsers() {
      fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
        .then((response) => response.json())
        .then((data) => setUsersData(data.results));
    }
    getUsers();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  return (
    <Default>
      <div>
        {users.map((user) => (
          <main className="user">
            <img className="pic" src={user.picture.large} alt="" />
            <div className="data">
              <h1>
                Name:{" "}
                {`${user.name.title} ${user.name.first}  ${user.name.last}`}
              </h1>
              <h2>Username: {`${user.login.username}`}</h2>
              <p>Age: {`${user.dob.age} anos`}</p>
              <p>Email: {`${user.email}`}</p>
            </div>
          </main>
        ))}
        <div className="repagination">
          <button className="refresh" onClick={() => previousPage()}>
            anterior
          </button>
          <button className="refresh" onClick={() => nextPage()}>
            proximo
          </button>
        </div>
      </div>
    </Default>
  );
}
