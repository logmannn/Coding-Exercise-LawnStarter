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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: "",
      searching: false,
      category: ""
    };
  }

  render() {
    const { search, results, searching, category } = this.state;

    this.apiRequest = (category, search) => {
      this.setState({ searching: true });
      return fetch(`https://swapi.co/api/${category}/`)
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            results: responseJson.results,
            search,
            category,
            searching: false
          });
        })
        .catch(error => {
          console.error(error);
        });
    };

    return (
      <Main>
        <Container>
          <SearchContainer apiRequest={this.apiRequest} searching={searching} />
          <Results
            results={results}
            search={search}
            category={category}
            searching={searching}
          />
        </Container>
      </Main>
    );
  }
}
