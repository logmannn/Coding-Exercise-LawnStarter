import React, { Component } from "react";
import styled from "styled-components";

const Result = styled.div`
  flex: 3;

  height: 100%;
  min-height: 578px;

  border: 1px solid black;

  @media only screen and (max-width: 680px) {
    width: calc(100% - 62px);

    margin-bottom: 30px;
  }
`;

const H1 = styled.div`
  font-size: 18px;
  font-weight: bold;

  border-bottom: 1px solid #c4c4c4;

  padding-bottom: 17px;
`;

export default class Results extends Component {
  render() {
    console.log(this.props);
    return (
      <Result className="box">
        <H1>Results</H1>
      </Result>
    );
  }
}
