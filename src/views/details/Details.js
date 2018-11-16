import React, { Component } from "react";

export default class Main extends Component {
  componentWillMount() {
    if (typeof this.props.location.data === "undefined") {
      this.props.history.push("/");
    }
  }

  render() {
    console.log(this.props);
    return <div>Details</div>;
  }
}
