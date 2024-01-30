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


function MainPage() {
  const navigate = useNavigate();
 
  const navigateTocarepost = () => {
    navigate("/carepost");
  };

  return (
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
  );
}

export default MainPage