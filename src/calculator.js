import { useState } from "react";

import "./calc.css";

export default function Caluctor() {
  const [result, setresult] = useState("");

  const btnhandler = (e) => {
    setresult(result.concat(e.target.value));
  };
  const clearbtn = () => {
    setresult("");
  };
  const calculate = () => {
    setresult(eval(result).toString());
  };

 const backBtn =() => {
if(result.length === 1){
  setresult('');
}
else{
  setresult(result.slice(0,-1))
}
 }

  return (
    <>
    <h1>Calculator</h1>
      <div className="calc">
        
        <input type="text" placeholder="0" id="answer" value={result} />
        <br />
        <input type="button" value="clear" className="btn" onClick={clearbtn} />
        <input type="button" value="%" className="btn" onClick={btnhandler} />      
        <input type="button" value="⬅" className="btn" onClick={backBtn} />
         <input type="button" value="/" className="btn" onClick={btnhandler} />
        <br />
        <input type="button" value="9" className="btn" onClick={btnhandler} />
        <input type="button" value="8" className="btn" onClick={btnhandler} />
        <input type="button" value="7" className="btn" onClick={btnhandler} />
        <input type="button" value="*" className="btn" onClick={btnhandler} />

        <br />
        <input type="button" value="6" className="btn" onClick={btnhandler} />
        <input type="button" value="5" className="btn" onClick={btnhandler} />
        <input type="button" value="4" className="btn" onClick={btnhandler} />
        <input type="button" value="-" className="btn" onClick={btnhandler} />

        <br />
        <input type="button" value="3" className="btn" onClick={btnhandler} />
        <input type="button" value="2" className="btn" onClick={btnhandler} />
        <input type="button" value="1" className="btn" onClick={btnhandler} />
        <input type="button" value="+" className="btn" onClick={btnhandler} />
        <br />
        <input type="button" value="0" className="btn" onClick={btnhandler} />
        <input type="button" value="00" className="btn" onClick={btnhandler} />
        <input type="button" value="." className="btn" onClick={btnhandler} />
        <input type="button" value="=" className="btn" onClick={calculate} />
      </div>
    </>
  );
}
