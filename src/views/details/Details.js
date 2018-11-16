import React, { Component } from "react";

export default class Main extends Component {
  render() {
    this.componentWillMount = () => {
      if (typeof this.props.location.data === "undefined") {
        // If there is no data then go back to home.
        this.props.history.push("/");
      }
    };

    return <div>Details</div>;
  }
}
