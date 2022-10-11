import React, {
  useEffect,
} from "react";
// import Child from "./ChildClass";
// import Child from "./Child";
// import Child from "./ChildFwdRef";
import Child from "./ChildUseImperativeHandleFwdRef";

const Parent = () => {
  const childRef = React.createRef();

  useEffect(() => {
    console.log(
      "childRef",
      childRef.current
    );
  }, []);

  // return <Child reference={childRef} />;
  return <Child ref={childRef} />;
};

export default Parent;
