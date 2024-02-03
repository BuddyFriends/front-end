import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PetCardArea = styled.div`
  width: 280px;
  height: 600px;
  display: flex;
  flex-direction: Column;
  border: 3px solid #f6bd60;
  padding: 39px 40px 28px 40px; 
  margin-top: 70px;
  border-radius: 40px;
  background-color: ${(props) => props.isSelected ? '#f6bd60' : 'white'};
  margin-left: 15px;
  margin-right: 15px;
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

const PetPorfileTextContainer = styled.div`
  display: flex;
  flex-direction: Row;
  font-weight: bold;
  justify-content: center;
  margin-bottom: 22px;
`;

const Name = styled.text`
  font-size: 28px;
  font-family : "SCDream6";
  text-align: center;
  font-weight: bold;
`;

const PawLevelIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 10px;
`;

const GenderText = styled.text`
  font-size: 22px;
  font-family : "SCDream4";
  text-align: center;
`;

const SlashText = styled.text`
  font-size: 22px;
  font-family : "SCDream4";
  text-align: center;
`;

const AgeText = styled.text`
  font-size: 22px;
  font-family : "SCDream4";
  text-align: center;
`;

const AddressText = styled.text`
  font-size: 22px;
  font-family : "SCDream4";
  text-align: center;
`;

const PawIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 7px;
`;

const PawScoreText = styled.text`
  font-size: 22px;
  font-family : "SCDream4";
  text-align: center;
`;

const IntroduceText = styled.text`
  font-size: 18px;
  font-family : "SCDream4";
  text-align: center;
  margin-left: 68px;
  margin-right: 59px;
  padding-top: 15px;
  padding-bottom:10px;
`;

function PetProfileCard({ isSelected, onClick }) {
  // 펫프로필 카드 배경 변경
  // 클릭 상태를 관리하기 위한 상태 변수 추가
  const [isClicked, setIsClicked] = useState(false);

  // 클릭 이벤트 핸들러 함수
  const handleClick = () => {
    setIsClicked(!isClicked); // 클릭 상태를 토글
  };

  return (
    <PetCardArea onClick={onClick} bgColor={isSelected ? '#f6bd60' : 'white'}>
    <CircleContainer>
    <CircleImage src="/images/petProfile.png"></CircleImage>
    </CircleContainer>
    <PetPorfileTextContainer>
    <Name>다라</Name><PawLevelIcon src="/images/master_paw.png"></PawLevelIcon>
    </PetPorfileTextContainer>
    <PetPorfileTextContainer>
      <GenderText>여성</GenderText><SlashText>&nbsp;/&nbsp;</SlashText><AgeText>20대</AgeText>
    </PetPorfileTextContainer>
    <PetPorfileTextContainer>
      <AddressText>성북구</AddressText>
    </PetPorfileTextContainer>
    <PetPorfileTextContainer>
    <PawIcon src="/images/paw2.png"></PawIcon><PawScoreText>4.5점</PawScoreText>
    </PetPorfileTextContainer>
    <PetPorfileTextContainer>
    <IntroduceText>포메라니안을 키우는 견주입니다.<br/>강아지 너무 좋아요</IntroduceText>
    </PetPorfileTextContainer>
  </PetCardArea>
  )
}

export default PetProfileCard;