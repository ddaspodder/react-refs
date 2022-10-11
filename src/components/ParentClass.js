import React from "react";
import Child from "./ChildClass";

class Parent extends React.Component {
  childRef = React.createRef();

  componentDidMount() {
    console.log(
      "childRef",
      this.childRef
    );
  }

  render() {
    return (
      <Child
        reference={this.childRef}
      />
    );
  }
}

export default Parent;
