import React, {
  useImperativeHandle,
} from "react";

const Child = (props) => {
  console.log("Child rendered");

  useImperativeHandle(
    props.reference,
    () => ({ test: "test" })
  );

  return (
    <input
      type="text"
      // ref={props.reference}
    />
  );
};

export default Child;
