import React from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, BrowserRouter } from 'react-router-dom'; 

const Card = styled.div`
  background-color: white;
  border: 5px solid #f6bd60;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 40px 90px;
`;

const StyledCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isImage, src }) =>
    isImage
      ? css`
          background-image: url(${src});
          background-size: cover;
        `
      : css`
          background-color: #f6bd60;
          &:after {
            content: '+';
            color: black; 
            font-size: 100px;
          }
        `}
`;

const PetName = styled.div`
  font-family: "SCDream5";
  font-size: 20px;
  color: #010c26;
  margin-top: 10px;
  margin-bottom: 20px;
`;

function PetAdd({ imageSrc, name }) {
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    if (name === "새로운 반려동물 등록") {
      navigate('/add');
    } else {
      navigate('/gallery');
    }
  };

  return (
    <Card onClick={handleCardClick}>
      {name === "새로운 반려동물 등록" ? (
        <StyledCircle />
      ) : (
        <StyledCircle isImage src={imageSrc}>
          <img src={imageSrc} alt={name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        </StyledCircle>
      )}
      <PetName>{name}</PetName>
    </Card>
  );
}

export default PetAdd;
