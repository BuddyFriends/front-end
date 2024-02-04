import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import GridPage from '../components/GridPage'
import ProfileInfo from '../components/ProfileInfo';

const CardContainer = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: Row;
  border-radius: 40px;
  background-color: #F9DCC4;
  margin-Top : 50px;
  margin-Bottom : 100px;
  padding: 30px 30px 10px 10px;
`;

const ProfileCard1Container = styled.div`
  display: flex;
  flex-direction: Column;
  text-align: center;
`;

const ProfileCard2Container = styled.div`
  display: flex;
  flex-direction: Column;
  text-align: center;
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

const ProfileDetailGridContainer = styled.div`
  display: grid;
  margin-Top : 30px;
  margin-Bottom: 30px;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
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

const Title = styled.h1`
  font-size: 32px;
  font-family : "SCDream7";
  text-align: center;
`;

function GalleryProfile({ petDetails }) {
  // 태그 문자열을 # 기준으로 분리하여 배열로 변환
  // 문자열 시작에 #이 오는 경우, 첫 번째 요소가 빈 문자열이 되므로 filter(Boolean)으로 빈 문자열 제거
  const tags = petDetails?.tag ? petDetails.tag.split("#").filter(Boolean) : [];

  return (
    <CardContainer>
          <ProfileCard1Container>
          <CircleContainer>
          <CircleImage src={petDetails?.petImage} />
        </CircleContainer>
        <Title>{petDetails?.petName}</Title>
          </ProfileCard1Container>

          <ProfileCard2Container>
          <ProfileDetailGridContainer>
          <ProfileInfo label="나이" value={petDetails?.petAge} />
          <ProfileInfo label="품종" value={petDetails?.type} />
          <ProfileInfo label="좋아하는 것" value={petDetails?.petLike} />
          <ProfileInfo label="싫어하는 것" value={petDetails?.petDislike} />
          <ProfileInfo label="복용약" value={petDetails?.medicine} />
        </ProfileDetailGridContainer>
          <HashtagContainer>
            {/* 태그 배열을 매핑하여 Hashtag 컴포넌트로 변환 */}
            {tags.map((tag, index) => (
            <Hashtag key={index}>#{tag}</Hashtag>
          ))}
        </HashtagContainer>
          </ProfileCard2Container>

        </CardContainer>
  )
}

export default GalleryProfile