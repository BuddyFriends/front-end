import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 100px;
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
    margin-left: 420px;
    background-color: #F6BD60;
    color: #ffffff;
    font-size: 32px;
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
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Underline = styled.div`
  height: 2px;
  width: 50px;
  background-color: #333;
  margin: 10px auto;
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

function MainPage() {
  const navigate = useNavigate();
 
  const navigateTocarepost = () => {
    navigate("/carepost");
  };

  return (
    <div>
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
    <Title>Your Title</Title>
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
    </CareContainer>
    </div>
  );
}

export default MainPage