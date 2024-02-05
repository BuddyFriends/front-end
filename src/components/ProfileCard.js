import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProfileInfo from '../components/ProfileInfo';

const CardContainer = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: Column;
  border-radius: 40px;
  background-color: #F9DCC4;
  margin-Top : 50px;
  margin-Bottom : 50px;
  padding: 30px 30px 10px 10px;
`;

const CardTopContainer = styled.div`
  display : flex;
  flex-direction: Column;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`;

const CardBottomContainer = styled.div`
  display : flex;
  flex-direction: Row;
`;

const ProfileCard1Container = styled.div`
  display: flex;
  flex-direction: Column;
  text-align: center;
  padding : 10px;
`;

const ProfileCard2Container = styled.div`
  display: flex;
  flex-direction: Column;
  text-align: center;
  padding : 10px;
`;

const ProfileDetailGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-Bottom: 30px;
`;

const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 400px;
  margin-bottom:30px;
`;

const Hashtag = styled.div`
  height: 25px;
  background-color: #F6BD60;
  border-radius: 40px;
  padding: 9px 12px 6px 13px;
  margin-top : 10px;
  margin-left: 12px;
  margin-right: 8px;
`;

const CircleContainer = styled.div`
  display : flex;
  flex-direction: Row;
  text-align: center;
  margin-Top : 30px;
  margin-left: 50px;
  margin-Right: 50px;
  margin-Bottom : 30px;
`;

const CircleImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const ProfileText = styled.h3`
  font-size: 24px;
  font-family: "SCDream4";
`;

const ShortUnderline = styled.div`
  height: 2px;
  background-color: black;
  margin-left: 50px;
`;

const SmallIcon = styled.img`
  width: 24px; /* 이미지의 크기 조절 */
  height: 26px;
  margin-left: 56px;
  margin-right: 35px;
  justify-content: center;
  align-items: center;
`;


const ProfileCard = ({ postDetails, petDetails }) => {
    // 태그 문자열을 # 기준으로 분리하여 배열로 변환
  // 문자열 시작에 #이 오는 경우, 첫 번째 요소가 빈 문자열이 되므로 filter(Boolean)으로 빈 문자열 제거
  const tags = petDetails?.tag ? petDetails.tag.split("#").filter(Boolean) : [];


  // 서버에서 값을 받아와서 hashtags 업데이트
  useEffect(() => {
    // 서버에서 값 받아오는 로직
    // 예시: fetch('서버 API 주소').then(response => response.json()).then(data => setServerHashtags(data));
  }, []);

  return (
    <CardContainer>
      <CardTopContainer>
        <TextContainer>
          <SmallIcon src="/images/calendar_ic.png" alt="calendar" />
          <ProfileText>{postDetails.periodStart}</ProfileText>
          <ProfileText>&nbsp;~&nbsp;</ProfileText>
          <ProfileText>{postDetails.periodEnd}</ProfileText>
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
              <CircleImage src={petDetails.petImage} alt={petDetails.petName}></CircleImage>
            </CircleContainer>
          </ProfileCard1Container>

          <ProfileCard2Container>
          <ProfileDetailGridContainer>
            <ProfileInfo label="나이" value={petDetails.petAge} />
            <ProfileInfo label="품종" value={petDetails.petName} />
            <ProfileInfo label="좋아하는 것" value={petDetails.petLike} />
            <ProfileInfo label="싫어하는 것" value="꼬집기" />
            <ProfileInfo label="복용약" value="없음" />
          </ProfileDetailGridContainer>

          <HashtagContainer>
            {/* 태그 배열을 매핑하여 Hashtag 컴포넌트로 변환 */}
            {tags.map((tag, index) => (
              <Hashtag key={index}>#{tag}</Hashtag>
          ))}
        </HashtagContainer>
          </ProfileCard2Container>
        </CardBottomContainer>
      </CardContainer>
  );
};

export default ProfileCard;