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

function MainPostCard({ imageSrc, petName, date }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/caredetail");
  };

  return (
    <StyledProfile onClick={handleProfileClick}>
      <ProfileImage src={imageSrc} alt="Profile" />
      <PetName>{petName}</PetName>
      <Date>{date}</Date>
    </StyledProfile>
  );
};

export default MainPostCard
