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

const Section = styled.div`
  text-align: center;
  padding: 20px 50px 20px 50px;
  margin: 0px 50px 0px 50px;
`;

const LogoImage = styled.img`
  width: 250px;
  height: auto;
`;

const TitleContent = styled.p`
  margin: 0px 0px 30px 0px;
  font-size: 24px;
  font-family: 'SCDream7';
  color: #000;
`;

const TextContent = styled.p`
  margin: 3px 0px 10px 0px;
  font-size: 20px;
  font-family: 'SCDream4';
  color: #000;
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
        <Section>
          <TitleContent>Delvelopers</TitleContent>
          <TextContent>김다빈</TextContent>
          <TextContent>류지예</TextContent>
          <TextContent>여지원</TextContent>
          <TextContent>오지연</TextContent>
          <TextContent>정다교</TextContent>
        </Section>
        <Section>
          <TitleContent>Contact</TitleContent>        
          <TextContent>dabinsusan7@naver.com</TextContent>
          <TextContent>devdaradara@gmail.com</TextContent>
          <TextContent>yeojiwon0405@gmail.com</TextContent>
          <TextContent>ohjy0530@gmail.com</TextContent>
          <TextContent>hyunn0121@naver.com</TextContent>
        </Section>
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
