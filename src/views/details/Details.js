import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

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

  @media only screen and (max-width: 680px) {
    min-height: auto;
  }
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

const LinkText = styled(Link)`
  font-size: 14px;

  display: inline-block;
  cursor: pointer;

  color: #0094ff;
`;

const Alink = styled.div`
  display: inline-block;
`;

const SearchButton = styled(Link)`
  max-width: 187px;

  position: absolute;
  left: 30px;
  bottom: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  @media only screen and (max-width: 680px) {
    position: relative;

    left: 0;
    bottom: 0;

    margin-top: 18px;
  }
`;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extraData: [],
      loading: true,
      category: "",
      data: []
    };
  }

  componentWillMount() {
    if (typeof this.props.location.data === "undefined") {
      // this.props.history.push("/");
      let url = `https://swapi.co/api/${
        this.props.match.params.category === "people" ? "people" : "films"
      }/${this.props.match.params.id}`;

      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            category: this.props.match.params.category,
            data: responseJson
          });
          return responseJson;
        })
        .catch(error => {
          console.error(error);
        });
    } else if (this.state.loading) {
      this.mounted();
    }
  }

  componentDidUpdate() {
    if (this.state.loading) {
      this.mounted();
    }
  }

  mounted() {
    let tempData = [];

    let category = this.props.location.category;
    let currentData = this.props.location.data;

    if (typeof currentData === "undefined") {
      category = this.state.category;
      currentData = this.state.data;
    }

    if (category === "people") {
      for (let i = 0; i < currentData.films.length; i++) {
        fetch(currentData.films[i])
          .then(response => response.json())
          .then(responseJson => {
            this.setState({
              extraData: [...this.state.extraData, responseJson]
            });
            return responseJson;
          })
          .catch(error => {
            console.error(error);
          });
      }
      this.setState({ extraData: tempData });
    } else if (category === "films" || category === "movies") {
      for (let i = 0; i < currentData.characters.length; i++) {
        fetch(currentData.characters[i])
          .then(response => response.json())
          .then(responseJson => {
            this.setState({
              extraData: [...this.state.extraData, responseJson]
            });
            return responseJson;
          })
          .catch(error => {
            console.error(error);
          });
      }
      this.setState({ extraData: tempData });
    }
    this.setState({ loading: false });
  }

  render() {
    let { category, data } = this.props.location;
    const { extraData, loading } = this.state;

    if (typeof data === "undefined") {
      category = this.state.category;
      data = this.state.data;
    }

    return (
      <Main>
        {!loading ? (
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
                  <Text style={{ whiteSpace: "pre-line" }}>
                    {data.opening_crawl}
                  </Text>
                )}
              </Row>
              <Row>
                <Title>{category === "people" ? "Movies" : "Characters"}</Title>
                {category === "people" &&
                  extraData.map((film, i) => {
                    return (
                      <Alink key={i}>
                        <LinkText
                          onClick={() => this.setState({ loading: true })}
                          to={{
                            pathname: `/details/movies/${film.url
                              .replace(
                                /https:\/\/swapi\.co\/api\/people\//g,
                                ""
                              )
                              .replace(/https:\/\/swapi\.co\/api\/films\//g, "")
                              .replace(/\//g, "")}`,
                            data: film,
                            category: "films"
                          }}
                        >
                          {film.title}
                        </LinkText>
                        ,&nbsp;
                      </Alink>
                    );
                  })}
                {(category === "films" || category === "movies") &&
                  extraData.map((character, i) => {
                    return (
                      <Alink key={i}>
                        <LinkText
                          onClick={() => this.setState({ loading: true })}
                          to={{
                            pathname: `/details/people/${character.url
                              .replace(
                                /https:\/\/swapi\.co\/api\/people\//g,
                                ""
                              )
                              .replace(/https:\/\/swapi\.co\/api\/films\//g, "")
                              .replace(/\//g, "")}`,
                            data: character,
                            category: "people"
                          }}
                        >
                          {character.name}
                        </LinkText>
                        ,&nbsp;
                      </Alink>
                    );
                  })}
              </Row>
            </Info>
            <div>
              <SearchButton
                className="searchButton"
                to={{
                  pathname: "/"
                }}
              >
                BACK TO SEARCH
              </SearchButton>
            </div>
          </Detail>
        ) : (
          <Detail className="box">loading</Detail>
        )}
      </Main>
    );
  }
}

export default withRouter(Details);
