function Events() {
  function handleClick(a, b) {
    return alert(a + b)
  }
  return (
    <button onClick={() => handleClick(2, 2)}>Click</button>
  )
}

export default Events