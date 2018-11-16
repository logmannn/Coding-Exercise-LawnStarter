import React, { Component } from "react";
import styled from "styled-components";

const Result = styled.div`
  flex: 3;

  height: 100%;
  min-height: 458px;

  border: 1px solid black;

  padding-bottom: 0 !important;

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

const H2 = styled.div`
  font-size: 18px;
  font-weight: bold;

  border-bottom: 1px solid #c4c4c4;

  display: flex;

  align-items: center;
`;

const ResultItems = styled.div`
  overflow: scroll;
  max-height: 478px;

  position: relative;
`;

const ResultText = styled.div`
  padding-top: 17px;
  padding-bottom: 17px;
`;

export default class Results extends Component {
  render() {
    const { results, category, search, searching } = this.props;

    return (
      <Result className="box">
        <H1>Results</H1>
        <ResultItems>
          {results.length > 0 &&
            results.map((result, i) => (
              <H2 key={i}>
                <ResultText>
                  {category === "people" ? result.name : result.title}
                </ResultText>
              </H2>
            ))}
        </ResultItems>
      </Result>
    );
  }
}
