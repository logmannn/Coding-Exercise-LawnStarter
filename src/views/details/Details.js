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

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extraData: [],
      loading: true
    };
  }

  componentWillMount() {
    if (typeof this.props.location.data === "undefined") {
      this.props.history.push("/");
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
    if (this.props.location.category === "people") {
      for (let i = 0; i < this.props.location.data.films.length; i++) {
        fetch(this.props.location.data.films[i])
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
    } else if (this.props.location.category === "films") {
      for (let i = 0; i < this.props.location.data.characters.length; i++) {
        fetch(this.props.location.data.characters[i])
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
    const { category, data } = this.props.location;
    const { extraData, loading } = this.state;

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
                            pathname: "/details",
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
                {category === "films" &&
                  extraData.map((character, i) => {
                    return (
                      <Alink key={i}>
                        <LinkText
                          onClick={() => this.setState({ loading: true })}
                          to={{
                            pathname: "/details",
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
          </Detail>
        ) : (
          <Detail className="box">loading</Detail>
        )}
      </Main>
    );
  }
}

export default withRouter(Details);
