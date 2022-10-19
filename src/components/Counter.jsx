//import react, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

export const Counter = (props) => {
  const count = useSelector((state) => state.counter);
  const counter = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          counter({ type: "Data" });
        }}
      >
      </button>
    </div>
  );
};