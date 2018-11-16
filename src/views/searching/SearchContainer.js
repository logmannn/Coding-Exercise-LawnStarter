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
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "people"
    };
  }

  render() {
    const { category } = this.state;

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
        {this.state.category}
      </Search>
    );
  }
}
