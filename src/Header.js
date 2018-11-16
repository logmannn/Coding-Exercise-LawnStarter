import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.div``;

const Company = styled(Link)``;

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
