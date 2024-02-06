import { useState } from "react";

function StringValue() {
  const [username, setUsername] = useState("DOE")
  function changeUsername() {
    setUsername("Dorcas")
  }
  return (
    <>
      <h1>{username}</h1>
      <button onClick={changeUsername}>+</button>
    </>
  )
}

export default StringValue