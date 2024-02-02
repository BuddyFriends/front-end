import React from 'react'
import styled from 'styled-components';
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

const ColumnContainer = styled.div`
  text-align: center;
  margin: 10px 0px 30px 0px;
  div{
    display: flex;
  }
`;

const SmallIcon = styled.img`
  width: 38px; /* 이미지의 크기 조절 */
  height: 30px;
  margin-left: 50px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

const IconTextContainer = styled.div`
  display : flex;
  flex-direction : row;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family : "SCDream7";
  text-align: center;
`;

const LongUnderline = styled.div`
  width: 1000px;
  height: 2px;
  background-color: black;
`;

const CardContainer = styled.div`
  width: 1000px;
  height: 400px;
  display: flex;
  flex-direction: Row;
  border-radius: 10px;
  background-color: #F9DCC4;
  margin-Top : 50px;
  margin-Bottom : 100px;
  padding: 30px 30px 10px 10px;
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


function MyPage() {
  return (

    <ProfileContainer>
      <ColumnContainer>
      <IconTextContainer>
        <SmallIcon src="/images/paw.png" alt="paw" />
        <Title>마이페이지</Title>
      </IconTextContainer>
      <LongUnderline/>
      </ColumnContainer>

      <CardContainer>
        <CircleContainer>
          <CircleImage src="/images/petProfile.png"></CircleImage>
        </CircleContainer>
      </CardContainer>

    </ProfileContainer>
  )
}

export default MyPage