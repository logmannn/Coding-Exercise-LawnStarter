import React, { Component } from "react";
import styled from "styled-components";

const Search = styled.div`
  margin-right: 30px;

  flex: 2;

  border: 1px solid black;

  min-height: 230px;

  @media only screen and (max-width: 680px) {
    width: 100%;

    margin-bottom: 30px;
  }
`;

export default class SearchContainer extends Component {
  render() {
    return <Search>SearchContainer</Search>;
  }
}
