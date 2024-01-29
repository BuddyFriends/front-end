import React from 'react';
import styled from 'styled-components';
import BuddyFriendsLogo from '../assets/icons/BuddyFriendsLogo.png';
import InstagramIcon from '../assets/icons/Instagram.png'; 
import YoutubeIcon from '../assets/icons/Youtube.png'; 

const FooterBarContainer = styled.footer`
  width: 100%;
  background-color: #F6BD60;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-family: "SCDream5"
  font-size: 22px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 0 10%;
`;

const LogoImage = styled.img`
  width: 250px;
  height: auto;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Divider = styled.div`
  height: 2px;
  background-color: #333;
  width: 100%;
  margin: 20px 0;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

const Icon = styled.img`
  width: 30px; 
  height: auto;
  margin: 0 10px;
`;

const FooterText = styled.p`
  font-size: 14px;
`;

const FooterBar = () => {
  return (
    <FooterBarContainer>
      <TopSection>
        <LogoImage src={BuddyFriendsLogo} alt="BuddyFriends Logo" />
        <InfoSection>
          <FooterText>개인정보취급방침</FooterText>
          <FooterText>이용약관</FooterText>
          <FooterText>공지사항</FooterText>
        </InfoSection>
        <InfoSection>
          <FooterText>고객센터</FooterText>
          <FooterText>(ARS) 02-901-8000</FooterText>
          <FooterText>평일 10:00-18:00 | 점심 13:00-14:00</FooterText>
          <FooterText>토요일, 일요일, 공휴일 휴무</FooterText>
          <FooterText>이메일: [email protected]</FooterText>
        </InfoSection>
      </TopSection>
      <Divider />
      <SocialIcons>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Icon src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Icon src={YoutubeIcon} alt="Youtube" />
        </a>
      </SocialIcons>
      <FooterText>© 2024 BuddyFriends. All Rights Reserved.</FooterText>
    </FooterBarContainer>
  );
};

export default FooterBar;
