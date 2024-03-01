import { useEffect, useState } from "react";

function Useeffect() {
  const [isHungry, setIsHungry] = useState(true);
  const [breathefire, setBreathefire] = useState(true)

  useEffect(() => {
    if (isHungry) {
      console.log("Time to feed Sparky!");
      setIsHungry(false);
    }
  }, [isHungry]);

  useEffect(() => {
    if (breathefire) {
      console.log("breathe fire!!!!!");
      setBreathefire(false)
    }
  }, [breathefire])

  return (
    <>
      <button onClick={() => setIsHungry(true)}>Make Sparky hungry</button>
      <button onClick={() => setBreathefire(true)}>Make Sparky breathe fire</button>
    </>
  )
}

export default Useeffect