import React, {
  useImperativeHandle,
  useRef,
} from "react";

const Child = (props, ref) => {
  console.log("Child rendered");

  const reference = useRef(null);

  const dummyChildFunc = () => {
    console.log("dummy chlld function");
  };

  useImperativeHandle(ref, () => ({
    inputRef: reference.current,
    dummyChildFunc,
  }));

  return (
    <input
      type="text"
      ref={reference}
    />
  );
};

const ChildFwdRef =
  React.forwardRef(Child);

export default ChildFwdRef;
