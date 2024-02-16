import { useContext } from "react"
import { Data, Data1 } from "./List"

const CompA = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <>
      <p>My name is:{name}& I'm{age}</p>
    </>
  )
}

export default CompA

