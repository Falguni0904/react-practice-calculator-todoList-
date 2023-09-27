import { useState } from "react";
import { data } from "./data";
import './Gallery.css';

export default function Gallery() {
  const [index, setindex] = useState(0);
  const [show, setshow] = useState(false);
  const lastindex = index === data.length - 1;

  function handleclick() {
    if (index < data.length - 1) {
      setindex(index + 1);
    }
    if (index === data.length - 1) {
      setindex(0);
    }
    if (show === true) {
      setshow(!show);
    }
  }
  function showhandle() {
    setshow(!show);
  }

  function reset() {
    setindex(0);
  }

  return (
    <>
    <div className="box">
      {lastindex ? (
        <button onClick={reset}>Restart</button>
      ) : (
        <button onClick={handleclick}>Next</button>
      )}
      <p>
        {data[index].name} by {data[index].artist}
      </p>
      <p>({[index]} of 11)</p>
      <button onClick={showhandle}> {show ? "Hide" : "Show"} detail</button>
      <br /><br/>
      {show && <p>{data[index].description}</p>}
      <img src={data[index].url} alt={data[index].alt} />
      <br />
      {/* <p>{data[index].description}</p> */}
      </div>
    </>
  );
}
