/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, division, increment, multiplication } from "./slices/counter/counterSlice";
const Counter = () => {
  let data = useSelector((state) => state.counter.value);
  let dispatch = useDispatch()

  let[input, setInput] = useState("")
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <>
      <div>
        <div className="output">
          <h1>{data}</h1>
          <input type="text" onChange={handleChange}/>
        </div>
        <div className="btn_main">
          <button className="btn btn1" onClick={()=> dispatch(increment(+input))}>Increment</button>
          <button className="btn btn2" onClick={()=> dispatch(decrement(+input))}>Decrement</button>
          <button className="btn btn3" onClick={()=> dispatch(multiplication(+input))}>Multiplication</button>
          <button className="btn btn4" onClick={()=> dispatch(division(+input))}>Division</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
