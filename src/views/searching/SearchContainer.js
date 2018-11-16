import React, { Component } from "react";
import styled from "styled-components";

const Search = styled.div`
  margin-right: 30px;

  flex: 2;

  border: 1px solid black;

  min-height: 230px;

  @media only screen and (max-width: 680px) {
    width: calc(100% - 62px);

    margin-bottom: 30px;
  }
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 600;

  color: #383838;

  margin-bottom: 20px;
`;

const RadioContainer = styled.div`
  display: flex;

  flex-direction: row;

  margin-bottom: 20px;
`;

const Radio = styled.form`
  margin-right: 30px;

  white-space: nowrap;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const SearchInput = styled.input`
  max-width: 328px;
  width: calc(100% - 22px);

  height: 40px;

  border-radius: 4px;

  box-shadow: inset 0 1px 3px 0 rgba(132, 132, 132, 0.75);

  border: solid 1px #c4c4c4;

  background-color: #ffffff;

  font-size: 14px;
  font-weight: bold;

  padding-left: 10px;
  padding-right: 10px;

  margin-bottom: 20px;

  color: #383838;

  &::placeholder {
    color: #c4c4c4;
  }

  @media only screen and (max-width: 680px) {
    max-width: 100%;
  }
`;

const SearchButton = styled.button`
  max-width: 350px;
`;

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "people",
      search: "",
      searching: false
    };
  }

  render() {
    const { category, search, searching } = this.state;

    this.onChangeSearchInput = value => {
      this.setState({
        search: value
      });
    };

    return (
      <Search className="box">
        <Text>What are you searching for?</Text>
        <RadioContainer>
          <Radio>
            <RadioInput
              type="radio"
              name="People"
              value="People"
              checked={category === "people"}
              onChange={() => this.setState({ category: "people" })}
            />
            <Label>People</Label>
          </Radio>
          <Radio>
            <RadioInput
              type="radio"
              name="Movies"
              value="Movies"
              checked={category === "movies"}
              onChange={() => this.setState({ category: "movies" })}
            />
            <Label>Movies</Label>
          </Radio>
        </RadioContainer>
        <SearchInput
          type="text"
          placeholder={
            "e.g. " +
            (category === "people"
              ? "Chewbacca, Yoda, Boba Fett"
              : "The Empire Strikes Back, Return of the Jedi")
          }
          onChange={e => this.onChangeSearchInput(e.target.value)}
        />
        <SearchButton
          className="searchButton"
          type="submit"
          style={{
            backgroundColor: search === "" && "#c4c4c4",
            cursor: search === "" && "not-allowed"
          }}
          onClick={this.apiRequest}
          disabled={search === ""}
        >
          SEARCH{searching && "ING..."}
        </SearchButton>
      </Search>
    );
  }
}
