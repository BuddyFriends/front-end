import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileInfo from '../components/ProfileInfo';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #F9DCC4;
  padding: 20px;
  border-radius: 40px;
  z-index: 999;
  width: 1100px;
  height: 560px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
  font-family: "SCDream5";
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #F9DCC4;
  padding: 10px;
`;

const CardTopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`;

const CardBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

const ProfileCard1Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
`;

const ProfileCard2Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
`;

const ProfileDetailGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 30px;
`;

const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 400px;
`;

const Hashtag = styled.span`
  background-color: #F6BD60;
  border-radius: 40px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 8px;
`;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
`;

const CircleImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

const SmallIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 0px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding-top: 15px;
`;

const ProfileText = styled.h3`
  font-size: 24px;
  font-family: "SCDream4";
  margin-bottom: 10px;
`;

const ShortUnderline = styled.div`
  height: 1px;
  width: 1000px;
  background-color: black;
`;


const ProfileModal = ({ onClose, startDate, endDate, imageSrc }) => {

  // 초기값으로 설정할 해시태그
  const initialHashtags = [
    '#애교둥이',
    '#간식을사랑해',
    '#먹보',
    '#가끔은새침해요',
    '#산책하고뛰는걸좋아해요',
  ];

  // 해시태그를 저장할 상태와, 서버에서 받아온 값을 저장할 상태
  const [hashtags, setHashtags] = useState(initialHashtags);
  const [serverHashtags, setServerHashtags] = useState([]);

// 서버에서 값을 받아와서 hashtags 업데이트
  useEffect(() => {
    // 서버에서 값 받아오는 로직
    // 예시: fetch('서버 API 주소').then(response => response.json()).then(data => setServerHashtags(data));
  }, []);
  
  return (
    <ModalWrapper>
      <CloseButton onClick={onClose}>X</CloseButton>
      <Content>
      <CardContainer>
      <CardTopContainer>
        <TextContainer>
          <SmallIcon src="/images/calendar_ic.png" alt="calendar" />
          <ProfileText>{startDate} ~ {endDate}</ProfileText>
        </TextContainer>

        <TextContainer>
          <SmallIcon src="/images/people_ic.png" alt="people" />
          <ProfileText>여성만</ProfileText>
        </TextContainer>
        <ShortUnderline/>
      </CardTopContainer>

        <CardBottomContainer>
          <ProfileCard1Container>
            <CircleContainer>
              <CircleImage src={imageSrc} alt="CareDetailpetProfile"></CircleImage>
            </CircleContainer>
          </ProfileCard1Container>

          <ProfileCard2Container>
          <ProfileDetailGridContainer>
            <ProfileInfo label="나이" value="3" />
            <ProfileInfo label="품종" value="비숑" />
            <ProfileInfo label="좋아하는 것" value="고구마" />
            <ProfileInfo label="싫어하는 것" value="꼬집기" />
            <ProfileInfo label="복용약" value="없음" />
          </ProfileDetailGridContainer>

          <HashtagContainer>
            {/* 초기값 또는 서버에서 받아온 값으로 매핑 */}
            {serverHashtags.length > 0 ? serverHashtags.map((tag, index) => (
              <Hashtag key={index}>{tag}</Hashtag>
            )) : hashtags.map((tag, index) => (
              <Hashtag key={index}>{tag}</Hashtag>
            ))}
        </HashtagContainer>
          </ProfileCard2Container>
        </CardBottomContainer>
      </CardContainer>
      </Content>
    </ModalWrapper>
  );
};

export default ProfileModal;