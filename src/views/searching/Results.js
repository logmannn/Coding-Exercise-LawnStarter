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

export default class Results extends Component {
  render() {
    return <Result className="box">Results</Result>;
  }
}
