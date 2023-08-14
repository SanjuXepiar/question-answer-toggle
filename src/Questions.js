import React, { useState } from "react";
import "./App.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Questions = ({ title, info }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="content">
      <article>
        <h4>
          {title}
          <button onClick={() => setToggle(!toggle)} className="btn">
            {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </h4>
      </article>

      {toggle && <p>{info}</p>}
    </div>
  );
};
export default Questions;
