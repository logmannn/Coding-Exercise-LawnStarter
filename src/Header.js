import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
  box-shadow: 0 2px 0 0 #dadada;

  background-color: #ffffff;

  padding-top: 14px;
  padding-bottom: 14px;

  text-align: center;

  margin-bottom: 30px;
`;

const Company = styled(Link)`
  color: #0ab463;

  font-weight: 900;

  font-size: 18px;
  text-decoration: none;
`;

export const Header = () => (
  <HeaderDiv>
    <Company
      to={{
        pathname: "/"
      }}
    >
      SWStarter
    </Company>
  </HeaderDiv>
);
