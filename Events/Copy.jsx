function Copy() {
  function copyHandler() {
    alert("stop stealing")
  }
  return (
    <>
      <p onCopy={copyHandler}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aliquid, quibusdam eius, illum non omnis odit sint aperiam qui tempora consequatur, magnam nostrum dolor deserunt eligendi. Possimus eum nesciunt voluptas.
      </p>
    </>
  )
}
export default Copy