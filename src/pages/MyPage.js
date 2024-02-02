import React from "react";
import styled from "styled-components";
import UserInfo from "../components/UserInfo";
import PetAdd from "../components/PetAdd";
import ProfileComponent from "../components/ProfileComponent";

const PageContainer = styled.div`
  display: flex;
  padding: 60px;
  align-items: center;
  background-color: #f8edeb;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1300px;
  margin-bottom: 30px;
`;

const Paw = styled.img`
  width: 38px;
  height: 30px;
  margin-right: 10px;
`;

const HorizontalLine = styled.div`
  width: 70%;
  height: 2px;
  background-color: #010c26;
  /* margin-bottom: 30px; */
`;

const TitleText = styled.p`
  font-size: 32px;
  font-family: "SCDream7";
  color: #010c26;
  margin: 0;
`;

const AddPetContainer = styled.div`
  display: flex;
  justify-content: flex-start; // Align items to the start
  gap: 10px; // Reduce the gap between items
  width: 70%;
  margin-bottom: 20px;
`;

function MyPage() {
  return (
    <PageContainer>
      <TitleContainer>
        <Paw src="/images/paw.png" alt="paw" />
        <TitleText>마이페이지</TitleText>
      </TitleContainer>
      {/* <HorizontalLine /> */}
      <UserInfo />

      <TitleContainer>
        <Paw src="/images/paw.png" alt="paw" />
        <TitleText>반려 동물 등록하기</TitleText>
      </TitleContainer>
      {/* <HorizontalLine /> */}
      <AddPetContainer>
        <PetAdd imageSrc="/images/petProfile.png" name="뽀로리" />
        <PetAdd imageSrc="/images/petProfile.png" name="뽀로리" />
        <PetAdd imageSrc="" name="새로운 반려동물 등록" />
      </AddPetContainer>

      <TitleContainer>
        <Paw src="/images/paw.png" alt="paw" />
        <TitleText>돌봄 로그 기록</TitleText>
      </TitleContainer>
      {/* <HorizontalLine /> */}
      <ProfileComponent
        imageSrc="/images/cat.png"
        role="buddy"
        status="current"
        petName="냥이"
        startDate="2024-01-28"
        endDate="2024-01-31"
        grade="4/5"
        pawlevel="biginer"
      />
    </PageContainer>
  );
}

export default MyPage;
