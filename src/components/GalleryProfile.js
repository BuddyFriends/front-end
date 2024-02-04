import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import GridPage from '../components/GridPage'
import ProfileInfo from '../components/ProfileInfo';

const CardContainer = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: Row;
  border-radius: 40px;
  background-color: #F9DCC4;
  margin-Top : 50px;
  margin-Bottom : 100px;
  padding: 30px 30px 10px 10px;
`;

const ProfileCard1Container = styled.div`
  display: flex;
  flex-direction: Column;
  text-align: center;
`;

const ProfileCard2Container = styled.div`
  display: flex;
  flex-direction: Column;
  text-align: center;
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

const ProfileDetailGridContainer = styled.div`
  display: grid;
  margin-Top : 30px;
  margin-Bottom: 30px;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 400px;
  margin-bottom:30px;
`;

const Hashtag = styled.div`
  height: 25px;
  background-color: #F6BD60;
  border-radius: 40px;
  padding: 9px 12px 6px 13px;
  margin-top : 10px;
  margin-left: 12px;
  margin-right: 8px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family : "SCDream7";
  text-align: center;
`;

function GalleryProfile({ petDetails }) {
  const [petData, setPetData] = useState([]); // 반려동물 데이터를 저장할 상태

  // // 로컬 스토리지에서 userInfo 가져오기
  // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // const userId = userInfo ? userInfo.userId : null;

  // useEffect(() => {
  //   const fetchPetData = async () => {

  //     if (userId) {
  //       try {
  //         // axios를 사용하여 서버 요청
  //         const response = await axios.get(`http://localhost:8080/api/pet/get`, {
  //           params: {
  //             userId: userId, // 쿼리 파라미터로 userId 전달
  //             petId: petId
  //           }
  //         });
  //         setPetData(response.data); // 받아온 데이터로 상태 업데이트
  //       } catch (error) {
  //         console.error('Error fetching pet data:', error);
  //       }
  //     }
  //   };

  //   fetchPetData();
  // }, []);


      // 초기값으로 설정할 해시태그
      const initialHashtags = [
        '#애교둥이',
        '#간식을사랑해',
        '#먹보',
        '#가끔은새침해요',
        '#산책하고뛰는걸좋아해요',
      ];

  return (
    <CardContainer>
          <ProfileCard1Container>
          <CircleContainer>
          <CircleImage src={petDetails?.petImage} />
        </CircleContainer>
        <Title>{petDetails?.petName}</Title>
          </ProfileCard1Container>

          <ProfileCard2Container>
          <ProfileDetailGridContainer>
          <ProfileInfo label="나이" value={petDetails?.petAge} />
          <ProfileInfo label="품종" value={petDetails?.type} />
          <ProfileInfo label="좋아하는 것" value={petDetails?.petLike} />
          <ProfileInfo label="싫어하는 것" value={petDetails?.petDislike} />
          <ProfileInfo label="복용약" value={petDetails?.medicine} />
        </ProfileDetailGridContainer>
          <HashtagContainer>
            <Hashtag>{petDetails?.tag}</Hashtag>
            {/* 초기값 또는 서버에서 받아온 값으로 매핑 */}
            {/* {serverHashtags.length > 0 ? serverHashtags.map((tag, index) => (
              <Hashtag key={index}>{tag}</Hashtag>
            )) : hashtags.map((tag, index) => (
              <Hashtag key={index}>{tag}</Hashtag>
            ))} */}
        </HashtagContainer>
          </ProfileCard2Container>

        </CardContainer>
  )
}

export default GalleryProfile