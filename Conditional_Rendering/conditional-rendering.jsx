function List() {
  const ValidPassword = () => <h1>Valid Password</h1>
  const InValidPassword = () => <h1>InValid Password</h1>

  function Password(isValid) {
    if (isValid) {

      return <ValidPassword />
    } else {
      return <InValidPassword></InValidPassword>
    }
  }

  return (
    <>
      <Password isValid={ValidPassword} />
    </>
  )
}
export default List