import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 100px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  border-radius: 200px;
  overflow: hidden;
  margin-right: 100px; /* 이미지와 글씨 간 간격 조절 */
`;

const Image = styled.img`
  width: 484px; /* 이미지의 크기 조절 */
  height: 709px;
`;

const TextContainer = styled.div`
  font-size: 32px; /* 글씨 크기 조절 */
  button {
    margin: 50px;
    margin-left: 450px;
    background-color: #F6BD60;
    color: #ffffff;
    font-size: 24px;
    padding: 10px 20px; /* (상하 10px, 좌우 20px) */
    border: none;
    border-radius: 10px;
    &:hover {
      background-color: #FF881A;
    }
  }
`;

const Name = styled.div`
  font-size: 100px;
  margin-bottom: 50px;
  strong {
    div {
      a1 {
        padding-left: 250px;
      }
    }
  }
`;

const CareContainer = styled.div`
  text-align: center;
  div{
    display: flex;
  }
`;

const Paw = styled.img`
  width: 38px; /* 이미지의 크기 조절 */
  height: 38px;
  margin-left: 100px;
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: left;
`;

const Underline = styled.div`
  height: 2px;
  width: 1200px;
  background-color: black;
  margin-left: 100px;
`;

const Image2Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CircleImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  margin: 0 10px;
`;

const CircleContainer = styled.div`
  text-align: center;
  margin: 50px;
`;

const OrangeCircle = styled.div`
  width: 300px;
  height: 300px;
  background-color: #FF881A;
  opacity: 0.7;
  border-radius: 50%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 1;
  }
`;

const TextInCircle = styled.span`
  color: black;
  font-size: 24px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 50px;
  margin-bottom: 200px;
`;

const StyledProfile = styled.div`
  width: 330px; /* 상자의 너비 조절 */
  height: 380px; /* 상자의 높이 조절 */
  background-color: white; /* 상자의 배경색 지정 */
  border-radius: 40px;
  border: 2px solid #F6BD60;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Arrows = styled.img`
  width: 20px;
  height: 40px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  margin-top: 150px;
`;

const ProfileImage = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const PetName = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Date = styled.div`
  font-size: 20px;
  color: gray;
`;

const Profile = ({ imageSrc, petName, date }) => (
  <StyledProfile>
    <ProfileImage src={imageSrc} alt="Profile" />
    <PetName>{petName}</PetName>
    <Date>{date}</Date>
  </StyledProfile>
);

function MainPage() {
  const navigate = useNavigate();
 
  const navigateTocarepost = () => {
    navigate("/carepost");
  };

  const profilesData = [
    { imageSrc: '/images/cat.png', petName: '냥이1', date: '2022-02-01' },
    { imageSrc: '/images/cat.png', petName: '냥이2', date: '2022-02-02' },
    { imageSrc: '/images/cat.png', petName: '냥이3', date: '2022-02-03' },
    // ... add more profiles as needed
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleRightArrowClick = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, profilesData.length - 1));
  };

  return (
    <div style={{
      backgroundColor: '#f8edeb',
      display:'flex',
      flexDirection:'column',
    }}>
    <MainContainer>
      <ImageContainer>
        <Image src="/images/maincat.png" alt="cat" />
      </ImageContainer>
      <TextContainer>
        <Name><strong><div>Buddy</div><div><a1>Friends</a1></div></strong></Name>
        <div>소중한 반려동물, 이웃에게 잠깐 맡겨보세요.</div>
        <button onClick={navigateTocarepost}>돌봄신청</button>
      </TextContainer>
    </MainContainer>
    <CareContainer>
    <div><Paw src="/images/paw.png" alt="paw"  /><Title>돌봄글 보러가기</Title></div>
    <Underline />
    <Image2Container>
      <CircleContainer>
        <CircleImage src="/images/dog.png" alt="dog" />
      </CircleContainer>
      <CircleContainer>
        <CircleImage src="/images/cat.png" alt="cat" />
      </CircleContainer>
      <CircleContainer>
        <OrangeCircle>
          <TextInCircle>other</TextInCircle>
        </OrangeCircle>
      </CircleContainer>
    </Image2Container>
    <ProfileContainer>
      <Arrows src="/images/left.png" onClick={handleLeftArrowClick} />
      {profilesData.slice(startIndex, startIndex + 3).map((profile, index) => (
        <Profile key={index} {...profile} />
      ))}
      <Arrows src="/images/right.png" onClick={handleRightArrowClick} />
    </ProfileContainer>
    </CareContainer>
    </div>
  );
}

export default MainPage