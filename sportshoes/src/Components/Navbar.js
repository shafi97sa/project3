import React from 'react'
import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #2b3336;
  font-size: 24px;
  color: white;
  display:flex;
  justify-content:space-between;
  padding: 0 10px;
  max-width:1440px;
  margin:0 auto;

  a {
    color:white;
    font-weight:bold;
    text-decoration:none;
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
        <a href=''>Men</a>
        <a href=''>Women</a>
        <a href=''>Kids</a>
        
    </StyledNavbar>
  )
}
