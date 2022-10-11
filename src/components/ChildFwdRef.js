import React from "react";

class Child extends React.Component {
  render() {
    return (
      <input
        type="text"
        ref={this.props.reference}
      />
    );
  }
}

const ChildFwdRef = React.forwardRef(
  (props, ref) => (
    <Child {...props} reference={ref} />
  )
);

export default ChildFwdRef;
