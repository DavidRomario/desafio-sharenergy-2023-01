import React from 'react'

export default function Refresh() {
    const [dogs, setDogs] = React.useState([])

      React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => setDogs(data))
  }, [])

  const HandleConfirmClick = (event) => {
    window.location.reload()
  }

 
  return (
    <div id="container">
      <h1 className="title" >Clique-me</h1>
      <div id="search">
        <button className="bt" onClick={HandleConfirmClick}>Refresh</button>
      </div>
      <img id="pic" src={dogs.message} alt="" />
    </div>
  )
}
