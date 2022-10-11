import React, {
  useEffect,
  useState,
} from "react";

import Child from "./Child";

const Parent = () => {
  let childRef = null;

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    console.log(
      "ref in use Effect",
      childRef
    );
    setMessage(
      "callback refs are called twice during update"
    );
  }, [childRef]);

  return (
    <div>
      <h2>{message}</h2>
      <Child
        reference={(ref) => {
          console.log(
            "ref in callback",
            ref
          );
          childRef = ref;
        }}
      />
    </div>
  );
};

export default Parent;
