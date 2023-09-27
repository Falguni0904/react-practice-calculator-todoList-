import { useState } from "react";

export default function Queuing() {
  const [number, setnumber] = useState(0);
     const [count, setcount] =useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setnumber(number + 1);
        }}
      >
        +1
      </button>
      <h1>{count}</h1>
      <button
      onClick={()=>{
        setcount(count => count+1)
        setcount(count => count+1)
        setcount(count => count+1)
      }}
      >+3</button>
    </>
  );
}
