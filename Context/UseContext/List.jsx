import { createContext } from "react";
import CompA from "./CompA";

export const Data = createContext();
export const Data1 = createContext();

const List = () => {
  const name = 'Dorcas'
  const age = 18
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <CompA />
        </Data1.Provider>
      </Data.Provider>
      <CompA />
    </>
  );
}


export default List;
