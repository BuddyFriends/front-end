import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BuddyFriendsLogo from "../assets/icons/BuddyFriendsLogo.png";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: #f6bd60;
  font-family: "SCDream5";
  font-size: 19px;
`;

const TextLink = styled(Link)`
  text-decoration: none;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavPageItem = styled.div`
  margin: 0 8rem;
  cursor: pointer;
  color: #000;
`;

const NavItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color: #000;
`;

const Navber = () => {
  const [userInfo, setUserInfo] =  useState(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    return storedUserInfo && storedUserInfo !== 'undefined' ? JSON.parse(storedUserInfo) : null;
  });
  console.log(userInfo)

  const handleLogout = async () => {
    try {
      // 로그인 정보를 localStorage에서 삭제
      localStorage.removeItem('userInfo');
      setUserInfo(null);
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <NavContainer>
      <NavItems>
        <TextLink to="/">
          <img
            src={BuddyFriendsLogo}
            alt={"Logo"}
            style={{
              width: "auto",
              height: "60px",
              marginRight: "20px",
              marginTop: "5px",
            }}
          />
        </TextLink>
        <TextLink to="/carepost">
          <NavPageItem>게시글 작성</NavPageItem>
        </TextLink>
        <TextLink to="/gallery">
          <NavPageItem>갤러리</NavPageItem>
        </TextLink>
        <TextLink to="/check">
          <NavPageItem>돌봄 진행 현황</NavPageItem>
        </TextLink>
      </NavItems>
      <NavItems>
        {userInfo !== null ? (
          <>
            <TextLink to="/mypage">
              <NavItem>{userInfo.userName}</NavItem>
            </TextLink>
            <NavItem onClick={handleLogout}>LogOut</NavItem>
          </>
        ) : (
          <>
            <TextLink to="/login">
              <NavItem>LogIn</NavItem>
            </TextLink>
            <TextLink to="/signup">
              <NavItem>SignUp</NavItem>
            </TextLink>
          </>
        )}
      </NavItems>
    </NavContainer>
  );
};

export default Navber;
