import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import PetProfileCard from '../components/PetProfileCard';

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

const LongUnderline = styled.div`
  width: 1024px;
  height: 2px;
  background-color: black;
`;

const ShortUnderline = styled.div`
  height: 2px;
  background-color: black;
  margin-left: 50px;
`;


const BigIcon = styled.img`
  width: 38px; /* 이미지의 크기 조절 */
  height: 30px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

const SmallIcon = styled.img`
  width: 24px; /* 이미지의 크기 조절 */
  height: 26px;
  margin-left: 56px;
  margin-right: 35px;
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

const ProfileText = styled.h3`
  font-size: 24px;
  font-family: "SCDream4";
`;


const Textarea = styled.div`
  margin-bottom: 75px;
  padding: 30px;
  border: 3px solid #f6bd60;
  border-radius: 20px;
  width: 1000px;
  height: 500px;
  background-color: white;
  margin-Top: 50px;
`;

const TextContent = styled.p`
  font-family: "SCDream4";
  font-size: 20px;
  margin: 30px;
  padding: 30px;
`;

const ButtonContainer = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: Row-reverse;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 70px;
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #F6BD60;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: 'SCDream7';
  color: white;
  font-size: 26px;
  cursor: pointer;
`;

const PetCardContainer = styled.div`
  display: flex;
  flex-direction: Row;
`;

const UnderContainer = styled.div`
  display: flex;
  flex-direction: Column;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center;
  margin-left: 36px;
  margin-right: 36px;
`;

const Arrows = styled.img`
  width: 20px;
  height: 36px;
`;



function CareDetailPage() {

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };


    // 초기값으로 설정할 해시태그
    const initialHashtags = [
      '#애교둥이',
      '#간식을사랑해',
      '#먹보',
      '#가끔은새침해요',
      '#산책하고뛰는걸좋아해요',
    ];

  //   // 해시태그를 저장할 상태와, 서버에서 받아온 값을 저장할 상태
  // const [hashtags, setHashtags] = useState(initialHashtags);
  // const [serverHashtags, setServerHashtags] = useState([]);

  // // 서버에서 값을 받아와서 hashtags 업데이트
  // useEffect(() => {
  //   // 서버에서 값 받아오는 로직
  //   // 예시: fetch('서버 API 주소').then(response => response.json()).then(data => setServerHashtags(data));
  // }, []);

  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [petDetails, setPetDetails] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);

  // 현재 로그인한 사용자 정보 가져오기
  useEffect(() => {
    // 예시: 로컬 스토리지에서 사용자 정보 가져오기
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.userId) {
      setCurrentUser(userInfo.userId);
    }
  }, []);

  useEffect(() => {
    async function fetchDetails() {
      try {
        // 게시글 상세 정보 가져오기
        const postResponse = await axios.get(`http://localhost:8080/api/post/${postId}`);
        setPostDetails(postResponse.data);

        // 반려동물 상세 정보 가져오기 (postResponse.data.petId를 사용)
        const petResponse = await axios.get(`http://localhost:8080/api/pet/get?petId=${postResponse.data.petId.petId}`);
        setPetDetails(petResponse.data);
      } catch (error) {
        console.error('Failed to fetch details:', error);
      }
    }

    fetchDetails();
  }, [postId]);

  // 게시글 작성자와 현재 로그인한 사용자가 같은지 확인
  const isAuthor = currentUser === postDetails?.userId?.userId;

  return (
    <div>
      <ProfileContainer>
      <ColumnContainer>
      <IconTextContainer>
        <BigIcon src="/images/paw.png" alt="paw" />
        <Title>이름 돌봄 부탁드립니다.</Title>
      </IconTextContainer>
      <LongUnderline/>
      </ColumnContainer>
      {postDetails && petDetails ? (
        <ProfileCard postDetails={postDetails} petDetails={petDetails} />
      ) : (
        <div>Loading...</div>
      )}
      <LongUnderline/>

      <Textarea>
        <TextContent>* 우리 뽀로리를 맡아주실 분을 구합니다.<br/>산책을 매우 좋아하고 온순한 강아지입니다.</TextContent>
      </Textarea>
      <LongUnderline/>
      {/* <UnderContainer>
      <PetCardContainer>
        <ArrowContainer>
          <Arrows src="images/left.png"></Arrows>
        </ArrowContainer>
        <PetCardContainer>
        {[0, 1, 2].map((index) => (
          <PetProfileCard
            key={index}
            isSelected={selectedCardIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </PetCardContainer>
      <ArrowContainer>
          <Arrows src="images/right.png"></Arrows>
        </ArrowContainer>
      </PetCardContainer>
      </UnderContainer> */}
              {isAuthor && (
          <UnderContainer>
            <PetCardContainer>
              {/* 중략 */}
              {[0, 1, 2].map((index) => (
                <PetProfileCard
                  key={index}
                  isSelected={selectedCardIndex === index}
                  onClick={() => handleCardClick(index)}
                />
              ))}
              {/* 중략 */}
            </PetCardContainer>
          </UnderContainer>
        )}
      {/* <ButtonContainer>
        <Button type="submit">신청하기</Button>
      </ButtonContainer> */}
      {/* 버튼 텍스트 조건부 렌더링 */}
      <ButtonContainer>
        <Button type="submit">{isAuthor ? '확정하기' : '신청하기'}</Button>
      </ButtonContainer>

    </ProfileContainer>
    </div>
    
  )
}

export default CareDetailPage