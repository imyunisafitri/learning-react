import React, { useRef } from "react";

const LocalStorage = () => {
  const data = useRef();
  const handleClick = () => {
    console.log(data.current.value, "initial value");
    localStorage.setItem("input value", data.current.value);
  };
  console.log(localStorage.getItem("input value"), "****");
  return (
    <div className="day-3">
      <input type="text" ref={data} />
      <br />
      <button onClick={handleClick}>Add</button>

      
    </div>
  );
};

export default LocalStorage;
