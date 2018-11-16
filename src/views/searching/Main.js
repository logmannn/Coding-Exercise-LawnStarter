import React, { Component } from "react";
import styled from "styled-components";
import SearchContainer from "./SearchContainer";
import Results from "./Results";

const Main = styled.div`
  display: flex;

  justify-content: center;

  margin-left: 1rem;
  margin-right: 1rem;
`;

const Container = styled.div`
  max-width: 1022px;
  width: 100%;

  display: flex;

  align-items: flex-start;
  align-content: flex-start;

  flex-direction: row;

  @media only screen and (max-width: 680px) {
    flex-direction: column;

    max-width: 100%;
  }
`;

// const SearchContainer = styled.div``;
// const Results = styled.div``;

export default class Home extends Component {
  render() {
    return (
      <Main>
        <Container>
          <SearchContainer />
          <Results />
        </Container>
      </Main>
    );
  }
}
