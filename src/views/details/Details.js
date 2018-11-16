import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;

  justify-content: center;

  margin-left: 1rem;
  margin-right: 1rem;

  position: relative;
`;

const Detail = styled.div`
  max-width: 804px;
  width: 100%;

  min-height: 355px;

  position: relative;
`;

const H1 = styled.div`
  font-size: 18px;
  font-weight: bold;

  margin-bottom: 30px;
`;

const Row = styled.div`
  flex: 1;
`;

const Info = styled.div`
  display: flex;

  flex-direction: row;

  @media only screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;

  padding-bottom: 10px;

  border-bottom: 1px solid #c4c4c4;

  margin-bottom: 5px;
`;

const Text = styled.div`
  font-size: 14px;
`;

export default class Details extends Component {
  render() {
    const { category, data } = this.props.location;

    let replace = "\r\n\r\n";
    let re = new RegExp(replace, "g");
    let opening_crawl = data.opening_crawl;
    opening_crawl = opening_crawl.replace(/(?:\r\n|\r|\n)/g, "<br>");
    console.log(opening_crawl);
    // if (open)
    // opening_crawl = opening_crawl.replace(/"Luke"/g, "Puke");

    this.componentWillMount = () => {
      console.log(this.props.location.data);
      if (typeof this.props.location.data === "undefined") {
        // If there is no data then go back to home.
        this.props.history.push("/");
      }
    };

    return (
      <Main>
        <Detail className="box">
          <H1>{category === "people" ? data.name : data.title}</H1>
          <Info>
            <Row className="row">
              <Title>
                {category === "people" ? "Details" : "Opening Crawl"}
              </Title>
              {category === "people" ? (
                <>
                  <Text>Birth Year: {data.birth_year}</Text>
                  <Text>Gender: {data.gender}</Text>
                  <Text>Eye Color: {data.eye_color}</Text>
                  <Text>Hair Color: {data.hair_color}</Text>
                  <Text>Height: {data.height}</Text>
                  <Text>Mass: {data.mass}</Text>
                </>
              ) : (
                <Text>{opening_crawl}</Text>
              )}
            </Row>
            <Row>
              <Title>{category === "people" ? "Movies" : "Characters"}</Title>
            </Row>
          </Info>
        </Detail>
      </Main>
    );
  }
}
