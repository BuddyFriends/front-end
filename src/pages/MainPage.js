import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainPostCard from "../components/MainPostCard";

const PageContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8edeb;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 100px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  border-radius: 200px;
  overflow: hidden;
  margin-right: 100px;
`;

const Image = styled.img`
  width: 484px;
  height: 709px;
`;

const TextContainer = styled.div`
  font-size: 32px;
`;

const Button = styled.button`
  margin: 50px;
  margin-left: 450px;
  background-color: #f6bd60;
  color: #ffffff;
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: #ff881a;
  }
`;

const Name = styled.div`
  font-size: 100px;
  margin-bottom: 50px;
`;

const Namea = styled.div`
  padding-left: 250px;
`;

const CareContainer = styled.div`
  text-align: center;
`;

const Carediv = styled.div`
  display: flex;
`;

const Paw = styled.img`
  width: 38px;
  height: 30px;
  margin-left: 100px;
  margin-right: 20px;
  padding-top: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: left;
`;

const Underline = styled.div`
  height: 2px;
  width: 1200px;
  background-color: black;
  margin-left: 100px;
`;

const Image2Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CircleImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  margin: 0 10px;
`;

const CircleContainer = styled.div`
  text-align: center;
  margin: 50px;
`;

const CircleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 300px; 
  height: 300px;
  border-radius: 50%;
  margin: 0px 40px 140px 40px;
  padding: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
  }
`;

const OverlayText = styled.span`
  position: absolute;
  top: 90%;
  left: 60%; 
  color: black;
  font-size: 24px;
  font-family: "SCDream7";
  font-color: #010C26;
  z-index: 1; 
`;

const OrangeCircle = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ff881a;
  opacity: 0.7;
  border-radius: 50%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 1;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 100px 120px;
`;

const Arrows = styled.img`
  width: 20px;
  height: 40px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  margin-top: 150px;
`;

function MainPage() {
  const navigate = useNavigate();

  const [species, setSpecies] = useState("all");
  const [posts, setPosts] = useState([]);

  const handleSpeciesClick = (newSpecies) => {
    setSpecies(newSpecies);
  };

  const navigateTocarepost = () => {
    navigate("/carepost");
  };

  const navigateToCareDetailPage = () => {
    navigate("/caredetail");
  };

  const [startIndex, setStartIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleRightArrowClick = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 3, 1)
    );
  };

  useEffect(() => {
    const fetchPosts = async (species) => {
      try {
        const response = await fetch(`http://localhost:8080/api/post/bySpecies?species=${species}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (species) {
      fetchPosts(species);
    }
  }, [species]);

  return (
    <PageContainer>
      <MainContainer>
        <ImageContainer>
          <Image src="/images/maincat.png" alt="cat" />
        </ImageContainer>
        <TextContainer>
          <Name>
            <strong>
              <div>Buddy</div>
              <div>
                <Namea>Friends</Namea>
              </div>
            </strong>
          </Name>
          <div>소중한 반려동물, 이웃에게 잠깐 맡겨보세요.</div>
          <Button onClick={navigateTocarepost}>돌봄신청</Button>
        </TextContainer>
      </MainContainer>

      <CareContainer>
        <Carediv>
          <Paw src="/images/paw.png" alt="paw" />
          <Title>돌봄글 보러가기</Title>
        </Carediv>
        <Underline />

        <Image2Container>
          <CircleButton onClick={() => handleSpeciesClick("dog")}>
            <CircleContainer>
              <CircleImage src="/images/dog.png" alt="dog" />
              <OverlayText>dog</OverlayText>
            </CircleContainer>
          </CircleButton>
          <CircleButton onClick={() => handleSpeciesClick("cat")}>
            <CircleContainer>
              <CircleImage src="/images/cat.png" alt="cat" />
              <OverlayText>cat</OverlayText>
            </CircleContainer>
          </CircleButton>
          <CircleButton onClick={() => handleSpeciesClick("all")}>
            <CircleContainer>
              <OrangeCircle>
                <OverlayText>other</OverlayText>
              </OrangeCircle>
            </CircleContainer>
          </CircleButton>
        </Image2Container>
      <ProfileContainer>
        <Arrows src="/images/left.png" onClick={handleLeftArrowClick} />
        {posts.slice(startIndex, startIndex + 3).map((post) => (
          <MainPostCard
            key={post.postId}
            postId={post.postId}
            petImage={post.petId.petImage}
            petName={post.petId.petName}
            periodStart={post.periodStart}
            periodEnd={post.periodEnd}
          />
        ))}
        <Arrows src="/images/right.png" onClick={handleRightArrowClick} />
      </ProfileContainer>
      </CareContainer>
    </PageContainer>
  );
}

export default MainPage;

