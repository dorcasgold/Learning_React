function Props() {
  const Topics = (props) => {
    return (
      <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </>
    )
  }
  return (
    <>
      <Topics name="English" age={155} />
    </>
  )
}

export default Props