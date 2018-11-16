import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import Loader from "react-loader-spinner";

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

const SearchButton = styled(Link)`
  max-width: 134px;

  height: 32px !important;

  position: absolute;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
`;

const Status = styled.div`
  height: calc(100% - 68px);

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

const StatusText = styled.div`
  color: #c4c4c4;

  font-size: 14px;
  font-weight: bold;

  max-width: 324px;
  width: 100%;
`;

class Results extends Component {
  render() {
    const { results, category, search, searching } = this.props;

    let filteredResults;

    const regex = new RegExp(search.toLowerCase(), "g");

    if (search === "") {
      filteredResults = results;
    } else if (category === "people") {
      filteredResults = results.filter(item =>
        regex.test(item.name.toLowerCase())
      );
    } else if (category === "films") {
      filteredResults = results.filter(item =>
        regex.test(item.title.toLowerCase())
      );
    }

    return (
      <Result className="box">
        <H1>Results</H1>
        <ResultItems>
          {filteredResults.length > 0 &&
            filteredResults.map((result, i) => (
              <H2 key={i}>
                <ResultText>
                  {category === "people" ? result.name : result.title}
                </ResultText>
                <SearchButton
                  className="searchButton"
                  to={{
                    pathname: `/details/${
                      category === "people" ? "people" : "movies"
                    }/${result.url
                      .replace(/https:\/\/swapi\.co\/api\/people\//g, "")
                      .replace(/https:\/\/swapi\.co\/api\/films\//g, "")
                      .replace(/\//g, "")}`,
                    data: result,
                    category: category
                  }}
                >
                  SEE DETAILS
                </SearchButton>
              </H2>
            ))}
        </ResultItems>
        <Status>
          {filteredResults.length === 0 && (
            <>
              {!searching ? (
                <StatusText>
                  There are zero matches. Use the form to search for People or
                  Movies.
                </StatusText>
              ) : (
                <StatusText>
                  <Loader type="Bars" color="#0ab463" height={80} width={80} />
                </StatusText>
              )}
            </>
          )}
        </Status>
      </Result>
    );
  }
}

export default withRouter(Results);
