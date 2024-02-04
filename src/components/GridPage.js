import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const GridItem = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

function GridPage({ pictures }) {
  const images = [
    "/images/dummyImage.png",
    "/images/dummyImage.png",
    "/images/dummyImage.png",
    "/images/dummyImage.png",
    "/images/dummyImage.png",
    "/images/dummyImage.png",
    "/images/dummyImage.png",
    "/images/dummyImage.png",
    "/images/dummyImage.png",
  ];

  const dummyImages = new Array(9).fill("/images/dummyImage.png");
  const displayImages = pictures.length < 9 ? [...pictures, ...dummyImages.slice(pictures.length)] : pictures.slice(0, 9);

  return (
    <GridContainer>
      {displayImages.map((image, index) => (
        <GridItem key={index}>
          <Image src={image} alt={`Image ${index}`} />
        </GridItem>
      ))}
    </GridContainer>
  );
}

export default GridPage;