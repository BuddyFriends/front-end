import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileInfo from '../components/ProfileInfo';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8edeb;
  padding: 100px;
  margin-bottom: 20px;
`;

const ColumnContainer = styled.div`
  text-align: center;
  margin: 10px 0px 30px 0px;
  div{
    display: flex;
  }
`;

const LongUnderline = styled.div`
  width: 1000px;
  height: 2px;
  background-color: black;
  margin-left: 50px;
`;

const ShortUnderline = styled.div`
  height: 2px;
  background-color: black;
  margin-left: 50px;
`;

const CardContainer = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: Column;
  border-radius: 10px;
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
`;

const Hashtag = styled.span`
  background-color: #F6BD60;
  border-radius: 40px;
  padding: 5px;
  margin-Top : 10px;
  margin-Bottom : 5px;
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

const SmallIcon = styled.img`
  width: 38px; /* 이미지의 크기 조절 */
  height: 38px;
  margin-left: 50px;
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family : "SCDream7";
  text-align: center;
`;

const ProfileText = styled.h3`
  font-size: 24px;
  font-family: "SCDream4";
`;


const Textarea = styled.div`
  margin-bottom: 15px;
  padding: 30px;
  border: 3px solid #f6bd60;
  border-radius: 20px;
  width: 1000px;
  height: 500px;
  background-color: white;
  margin-Top: 50px;
`;

const TextContent = styled.p`
  font-family: "SCDream4";
  font-size: 20px;
  margin: 30px;
  padding: 30px;
`;

const ButtonContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: Row-reverse;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 40px;
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #F6BD60;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: 'SCDream7';
  color: white;
  font-size: 26px;
  cursor: pointer;
`;

function CareDetailPage() {

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
      <div><SmallIcon src="/images/paw.png" alt="paw" /><Title>이름 돌봄 부탁드립니다.</Title></div>
      <LongUnderline/>
      </ColumnContainer>

      <CardContainer>
      <CardTopContainer>
        <TextContainer>
          <SmallIcon src="/images/calendar_ic.png" alt="calendar" />
          <ProfileText>2024-01-28</ProfileText>
          <ProfileText>&nbsp;~&nbsp;</ProfileText>
          <ProfileText>2024-01-31</ProfileText>
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
              <CircleImage src="/images/petProfile.png" alt="CareDetailpetProfile"></CircleImage>
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
      <LongUnderline/>

      <Textarea>
        <TextContent>* 우리 뽀로리를 맡아주실 분을 구합니다.<br/>산책을 매우 좋아하고 온순한 강아지입니다.</TextContent>
      </Textarea>

      <ButtonContainer>
        <Button type="submit">신청하기</Button>
      </ButtonContainer>

    </ProfileContainer>
    </div>
    
  )
}

export default CareDetailPage