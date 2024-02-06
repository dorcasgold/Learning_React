import { useState } from "react"
function Object2() {
  const [movies, setMovie] = useState([
    { id: 1, title: "Spiderman", ratings: 2 },
    { id: 2, title: "Aquaman", ratings: 5 }
  ]);
  function handleClick() {
    setMovie(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "Robots" } : m))
    )
  }
  return (
    <>
      {movies.map((movie) => (
        <li key={Math.random()}>{movie.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </>
  )
}

export default Object2