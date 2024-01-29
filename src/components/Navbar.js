import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import BuddyFriendsLogo from "../assets/icons/BuddyFriendsLogo.png";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: #F6BD60;
  font-family: 'SCDream5';
  font-size: 20px;
`;

const TextLink = styled(Link)`
  text-decoration: none;
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color: #000;
`;

const Navber = () => {
  const [userInfo, setUserInfo] = useState("사용자1");

  return (
    <NavContainer>
      <NavItems>
        <TextLink to="/">
          <img src={BuddyFriendsLogo} alt={'Logo'} style={{ width: 'auto', height: '60px', marginRight: '20px', marginTop: '5px'}} />
        </TextLink>
        <TextLink to="/">
          <NavItem>돌봄글 작성</NavItem>
        </TextLink>
        <TextLink to="/">
          <NavItem>갤러리</NavItem>
        </TextLink>
      </NavItems>
      <NavItems>
        {userInfo!==null ? (
          <>
            <NavItem>{userInfo.name}</NavItem>
            <NavItem>LogOut</NavItem>
          </>
        ) : (
          <TextLink to="/login">
            <NavItem>LogIn</NavItem>
            <NavItem>SignUp</NavItem>
          </TextLink>
        )}
      </NavItems>
    </NavContainer>
  );
};

export default Navber;