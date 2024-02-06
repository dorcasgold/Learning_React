import { useState } from "react"

function ArrayValue() {
  const [friends, setFriends] = useState(["tony", "sam"])
  function addOne() {
    setFriends([...friends, "Dorcas"])
  }
  function removeOne() {
    setFriends(friends.filter((f) => f !== "Dorcas"))
  }
  function updateOne() {
    setFriends(friends.map((f) => (f === "tony" ? "tony doe" : f)))
  }
  return (
    <>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </>
  )
}

export default ArrayValue