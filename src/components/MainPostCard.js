import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledProfile = styled.div`
  width: 330px;
  height: 380px;
  background-color: white;
  border-radius: 40px;
  border: 2px solid #f6bd60;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

const PetName = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
`;

const Date = styled.div`
  font-size: 20px;
  color: gray;
`;

function MainPostCard({ petImage, petName, periodStart, periodEnd }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/caredetail");
  };

  return (
    <StyledProfile onClick={handleProfileClick}>
      <ProfileImage src={petImage} alt="Profile" />
      <PetName>{petName}</PetName>
      <Date>{periodStart} ~ {periodEnd}</Date>
    </StyledProfile>
  );
};

export default MainPostCard
