import React from "react";

const Child = (props) => {
  console.log("Child rendered");
  return (
    <input
      type="text"
      ref={props.reference}
    />
  );
};

export default Child;
