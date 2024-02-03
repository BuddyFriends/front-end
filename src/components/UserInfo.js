import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import BeginnerPaw from "../assets/icons/beginner.png";
import NormalPaw from "../assets/icons/normal.png";
import MasterPaw from "../assets/icons/master.png";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1200px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fcd7ba;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 60px;
`;

const ProfileSection = styled.div`
  display: flex;
  width: 100%;
`;

const CircleImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin: 30px 80px 0px 60px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(5, auto);
  column-gap: 10px;
  row-gap: 10px;
  margin: 20px 0px 0px 10px;
`;

const Label = styled.div`
  font-weight: bold;
  font-family: "SCDream5";
  font-size: 22px;
  color: #ff881a;
  align-self: center;
  margin: 0px 20px 20px 0px;
`;

const Content = styled.div`
  font-family: "SCDream5";
  font-size: 22px;
  color: #010c26;
  align-self: center;
  display: flex;
  align-items: center;  
  margin-bottom: 20px;
`;

const EditButton = styled.button`
  width: 250px;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  background-color: #F6BD60;
  font-family: "SCDream5";
  font-size: 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  align-self: center;
  margin-top: 20px;
`;

const GradeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const GradePaw = styled.img`
  width: 34px;
  height: 30px;
  margin: 0px 0px 20px 10px;
`;

const PawScore = styled.img`
  width: 20px;
  height: 18px;
  margin-right: 8px;
  margin-bottom: 2px;
`;

function UserInfo() {
  const navigate = useNavigate();

  function handleEdit() {
    navigate("/edit");
  }

  return (
    <Box>
      <ProfileSection>
        <CircleImage src="/images/petProfile.png" alt="Profile" />
        <InfoGrid>
          <Label>닉네임</Label>
          <Content>유저의 닉네임이름</Content>
          <Label>등급</Label>
          <GradeContainer>
            <Content>Beginner Level</Content>
            <GradePaw src={BeginnerPaw} alt="paw" />
          </GradeContainer>
          <Label>성별</Label>
          <Content>성별</Content>
          <Label>거주지역</Label>
          <Content>지역</Content>
          <Label>꼬순내</Label>
          <Content>
            <PawScore src="/images/paw.png" alt="paw" /> 3.8
          </Content>
          <Label>한줄소개</Label>
          <Content>소개</Content>
        </InfoGrid>
      </ProfileSection>
      <EditButton onClick={handleEdit}>프로필 수정</EditButton>
    </Box>
  );
}

export default UserInfo;
