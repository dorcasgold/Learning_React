const Cart = () => {
  const items = ["Ring", "clothes", "Bed", "car", "spoon"]

  return (
    <>
      <h2>Cart</h2>
      <h4>You have {items.length} items left in your cart</h4>
      <hr></hr>
      <ul>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </>
  )
}

function List() {

  return (
    <>
      <Cart />
    </>
  )
}
export default List