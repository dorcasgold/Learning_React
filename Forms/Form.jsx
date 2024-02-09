import { useState } from "react";

function Form() {
  const [username, setUsername] = useState("")

  function handleChange(event) {
    setUsername(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    alert(`You typed: ${username}`)
    setUsername("")
  }
  return (
    <>
      <h2>Form</h2>
      <Form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange}></input>
        <button>Submit</button>
      </Form>
    </>
  )
}

export default Form