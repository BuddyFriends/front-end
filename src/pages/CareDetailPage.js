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
  padding-bottom: 100px;
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

    const [currentUser, setCurrentUser] = useState(null);

  // 현재 로그인한 사용자 정보 가져오기
  useEffect(() => {
    // 예시: 로컬 스토리지에서 사용자 정보 가져오기
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.userId) {
      setCurrentUser(userInfo.userId);
    }
  }, []);

  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [petDetails, setPetDetails] = useState(null);
  const [isApplied, setIsApplied] = useState(false); // 신청 완료 상태 추가
  const [applicants, setApplicants] = useState([]); // 신청자 목록 상태 추가



  useEffect(() => {
    async function fetchDetails() {
      try {
        // 게시글 상세 정보 가져오기
        const postResponse = await axios.get(`http://localhost:8080/api/post/detail`, { params: { postId } });
        setPostDetails(postResponse.data);

        // 반려동물 상세 정보 가져오기
        const petResponse = await axios.get(`http://localhost:8080/api/pet/get`, { params: { userId: postResponse.data.userId, petId: postResponse.data.petId } });
        setPetDetails(petResponse.data);
      } catch (error) {
        console.error('Failed to fetch details:', error);
      }
    }

    fetchDetails();
  }, [postId]);

  // 게시글 작성자와 현재 로그인한 사용자가 같은지 확인
  // const isAuthor = currentUser === postDetails?.userId?.userId;
  const isAuthor = currentUser === postDetails?.userId;

  // 신청하기 함수
  const handleApply = async () => {
    const applyData = {
      postId: postId,
      userId: currentUser,
    };

    try {
      await axios.post('http://localhost:8080/api/applicant/apply', applyData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('신청이 완료되었습니다.');
      setIsApplied(true); // 신청 완료 상태 업데이트
    } catch (error) {
      console.error('신청하기 실패:', error);
      alert('신청하기에 실패했습니다.');
    }
  };

  // 게시글 상세 정보 및 반려동물 정보 불러오기와 동일한 useEffect 내부 또는 별도의 useEffect 사용
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/applicant/list`, {
          params: { postId: postId },
        });
        setApplicants(response.data); // 신청자 목록 상태 업데이트
      } catch (error) {
        console.error('신청자 정보 불러오기 실패:', error);
      }
    };

    if (isAuthor) { // 게시글 작성자만 신청자 목록을 불러옴
      fetchApplicants();
    }
  }, [postId, isAuthor]);

  const [selectedApplicantId, setSelectedApplicantId] = useState(null); // 선택된 신청자 ID 상태

  // 신청자 선택 핸들러
  const handleApplicantSelect = (applicantId) => {
    setSelectedApplicantId(applicantId);
  };

  

  return (
    <div>
      <ProfileContainer>
      <ColumnContainer>
      <IconTextContainer>
        <BigIcon src="/images/paw.png" alt="paw" />
        <Title>{postDetails ? postDetails.title : "Loading..."}</Title>
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
        <TextContent>{postDetails ? postDetails.content : "Loading..."}</TextContent>
      </Textarea>
      <LongUnderline/>
      {isAuthor && (
      <UnderContainer>
      <PetCardContainer>
      <ArrowContainer>
      </ArrowContainer>
      {applicants.map((applicant) => (
              <PetProfileCard
                key={applicant.id}
                applicant={applicant}
                isSelected={selectedApplicantId === applicant.id} // 선택 상태 prop 전달
                onClick={() => handleApplicantSelect(applicant.id)} // 클릭 핸들러 prop 전달
              />
            ))}
      <ArrowContainer>
      </ArrowContainer>
      </PetCardContainer>
    </UnderContainer>
    )}

      {/* <ButtonContainer>
        <Button type="submit">신청하기</Button>
      </ButtonContainer> */}
      {/* 버튼 텍스트 조건부 렌더링 */}
      {/* <ButtonContainer>
        <Button type="button">{isAuthor ? '확정하기' : '신청하기'}</Button>
      </ButtonContainer> */}
              <ButtonContainer>
          <Button
            type="button"
            onClick={!isAuthor && !isApplied ? handleApply : undefined}
            disabled={isApplied} // 신청 완료 상태에서 버튼 비활성화
          >
            {isAuthor ? '확정하기' : isApplied ? '신청완료' : '신청하기'}
          </Button>
        </ButtonContainer>

    </ProfileContainer>
    </div>
    
  )
}

export default CareDetailPage