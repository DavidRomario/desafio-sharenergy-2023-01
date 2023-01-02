import React from "react"

export default function RandomUserList() {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((data) => setUsers(data))
  }, [])

  console.log(users, 'users');
  const HandleConfirmClick = (event) => {
    console.log("click");
  }
  return (
    <div>
      <div id="search">
        <input type="search" className="btn" placeholder="Search..."/>
        <button onClick={HandleConfirmClick} className="bt">Search</button>
      </div>
        {users.length <= 0 ? '' : users.results.map((user) => (
        <section className="user">
          <img src={user.picture.large} alt=""/>
          <div className="data">
            <h1>Nome: {`${user.name.title} ${user.name.first}  ${user.name.last}`}</h1>
            <h2>username: {`${user.login.username}`}</h2>
            <p>idade: {`${user.dob.age} anos` }</p>
            <p>email: {`${user.email}`}</p>
          </div>
        </section>
      ))}      
    </div>
  )
}
