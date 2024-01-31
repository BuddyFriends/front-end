import React from 'react';
import styled from 'styled-components';

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

function GridPage() {
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

  return (
    <GridContainer>
      {images.map((image, index) => (
        <GridItem key={index}>
          <Image src={image} alt={`Image ${index}`} />
        </GridItem>
      ))}
    </GridContainer>
  );
}

export default GridPage;