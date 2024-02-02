import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GridPage from '../components/GridPage'
import ProfileInfo from '../components/ProfileInfo';
import { useNavigate } from "react-router-dom";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8edeb;
  padding: 100px;
  margin-bottom: 20px;
`;

/* 
const RowWrapper = styled.div`
  flex-direction: Row;
  display: flex;
  margin: 10px 0px 30px 0px;
  align-items: center;
`;

const ColumnWrapper = styled.div`
  flex-direction: Column;
  display: flex;
  margin: 10px 0px 30px 0px;
  align-items: center;
`;
*/

const ColumnContainer = styled.div`
  text-align: center;
  margin: 10px 0px 30px 0px;
  div{
    display: flex;
  }
`;

const Underline = styled.div`
  height: 2px;
  width: 1200px;
  background-color: black;
  margin-left: 100px;
`;

const CardContainer = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: Row;
  border-radius: 10px;
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

const Pagination = styled.div`
  display : flex;
  flex-direction: Row;
  margin-Top: 20px;
  align-items: center;
`;

const TextContent = styled.p`
  display : flex;
  flex-direction : Row;
  margin: 0px 10px 0px 0px;
  color: #010C26;
`;

const Text = styled.div`
  display: flex;
  font-size: 18px;
  font-family: "SCDream4";
  margin-left : 10px;
`;

const PageText = styled.div`
  font-family: "SCDream5";
  font-size: 30px;
  margin-Right: 15px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
const IconTextContainer = styled.div`
  display : flex;
  flex-direction : row;
  align-items: center;
`;

const Paw = styled.img`
  width: 38px; /* 이미지의 크기 조절 */
  height: 30px;
  margin-left: 100px;
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family : "SCDream7";
  text-align: center;
`;

const Arrows = styled.img`
  width: 10px;
  height: 30px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;


function GalleryPage() {

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
    <div>
      <ProfileContainer>
        <ColumnContainer>
          <IconTextContainer><Paw src="/images/paw.png" alt="paw" /><Title>반려 버디 프로필</Title></IconTextContainer>
          <Underline/>
        </ColumnContainer>

        <CardContainer>
          <ProfileCard1Container>
          <CircleContainer>
            <CircleImage src="/images/petProfile.png"/>
          </CircleContainer>
          <Title>뽀로리</Title>
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

        </CardContainer>

        <ColumnContainer>
          <IconTextContainer><Paw src="/images/paw.png" alt="paw" /><Title>반려 버디 추억 갤러리</Title></IconTextContainer>
          <Underline/>
        </ColumnContainer>

        <GridPage />
        <Pagination>
          <PageText>1</PageText>
          <PageText>2</PageText>
          <PageText>3</PageText>
          <PageText>4</PageText>
          <PageText>5</PageText>
          <Arrows src="/images/right_arrow.png" alt="right_arrow"/>
        </Pagination>
      </ProfileContainer>
    </div>
  )
}

export default GalleryPage