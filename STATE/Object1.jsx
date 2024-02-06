import { useState } from "react"
function Object1() {
  const [movie, setMovie] = useState({
    title: "Tom & Jerry",
    ratings: 9,
  })
  function handleClick() {
    const copyMovie = {
      ...movie,
      ratings: 5,
    };
    setMovie(copyMovie)
  }
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.ratings}</p>
      <button onClick={handleClick}>Change Rating</button>
    </>
  )
}

export default Object1