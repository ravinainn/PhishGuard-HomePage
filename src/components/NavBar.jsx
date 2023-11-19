import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <>
      {/* <h1>Hello</h1> */}
      <NavContainer>
        <Logo className="logo">
          <span className="blue">Phish</span>Guard
        </Logo>
        <NavBtnGroup>
          <NavLink>Features</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Contact Us</NavLink>
          <NavBtn>Get Started</NavBtn>
          {/* <Link to="/">Features</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Contact Us</Link> */}
        </NavBtnGroup>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  /* background-color: aqua; */
  width: 72rem;
  /* height: 20vh; */
  margin: 1.5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1``;

const NavBtnGroup = styled.div`
  /* font-family: Sk-Modernist; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
const NavLink = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;
const NavBtn = styled.button`
  border-style: none;
  border-radius: 0.75rem;
  width: 9rem;
  height: 2.5rem;
  background-color: #146c94;

  color: #fff;
  font-weight: 400;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  line-height: normal;
`;

export default NavBar;
