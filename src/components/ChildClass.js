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

export default Child;
