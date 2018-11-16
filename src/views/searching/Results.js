import React, { Component } from "react";
import styled from "styled-components";

const Result = styled.div`
  flex: 3;

  height: 100%;
  min-height: 578px;

  border: 1px solid black;
`;

export default class Results extends Component {
  render() {
    return <Result>Results</Result>;
  }
}
