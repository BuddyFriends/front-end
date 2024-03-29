import React, { useState } from "react";
import styled from "styled-components";
import UploadModal from "./ImageUploadModal";
import ProfileModal from "./PetProfileModal";
import RatingModal from "./RatingModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  width: 1000px;
  height: 300px;
  background-color: white;
  border-radius: 40px;
  border: 3px solid #f6bd60;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  padding: 30px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-right: 50px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.div`
  flex: 1;
`;

const CurrentCheck = styled.div`
  margin-right: 0px;
  align-self: flex-start;
`;

const Check = styled.div`
  font-size: 15px;
  margin-right: 20px;
  margin-top: 20px;
  color: #00ab1b;
  display: flex;
`;

const CurrentText = styled.div`
  display: flex;
  color: #ff881a;
  font-size: 24px;
  margin-bottom: 20px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SmallIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 0px;
  margin-right: 10px;
`;

const ProfileText = styled.div`
  font-size: 24px;
  font-family: "SCDream4";
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BuddyNameContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const BuddyRole = styled.div`
  display: flex;
  font-size: 24px;
  font-family: "SCDream4";
  color: #f6bd60;
  width: 120px;
`;

const BuddyName = styled.div`
  display: flex;
  font-size: 24px;
  font-family: "SCDream4";
`;

const PawImange = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 0px;
  margin-right: 10px;
  padding-top: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 3px solid #f6bd60;
  font-size: 16px;
  cursor: pointer;
  font-family: "SCDream4";
  background-color: white;
  width: 240px;
  height: 40px;
  margin-right: 20px;
`;

const After = styled.div`
  color: #878787;
`;


const ProfileComponent = ({ postId, petId, imageSrc, role, status, petName, startDate, endDate, grade, pawlevel, helpername,userId, helperSex,helperNickname }) => {

  const navigate = useNavigate();
  console.log("postId", postId);

  const navigateToGallery = () => {
    navigate(`/gallery/${petId}`);
  };

  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isRatingModalOpen, setRatingModalOpen] = useState(false);

  const openUploadModal = () => {
    setUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setUploadModalOpen(false);
  };

  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };

  const openRatingModal = async () => {
    const apiUrl = `http://localhost:8080/api/post/care-done?postId=${postId}`;
    
    try {
      const response = await axios.put(apiUrl);
      if (response.status === 200) {
        setRatingModalOpen(true);
        // window.location.reload();
      } else {
        alert("돌봄 완료 처리에 실패했습니다.");
      } 
    } catch (error) {
      console.error(error);
      alert("돌봄 완료 처리에 실패했습니다.");
    };
  };

  const closeRatingModal = () => {
    setRatingModalOpen(false);
  };

  return (
    <Container>
      <LeftContainer>
        <ProfileImage src={imageSrc} alt="Profile" onClick={openProfileModal} />
        <Name>{petName}</Name>
      </LeftContainer>
      <Content>
        {status === "current" ? (
          <CurrentText>돌봄을 받고 있어요!</CurrentText>
        ) : (
          <CurrentText>돌봄 완료되었습니다.</CurrentText>
        )}
        <DateContainer>
          <SmallIcon src="/images/calendar_ic.png" alt="calendar" />
          <ProfileText>
            {startDate} ~ {endDate}
          </ProfileText>
        </DateContainer>
        {role === "buddy" && (
          <ContentContainer>
            <BuddyNameContainer>
              <BuddyRole>버디헬퍼</BuddyRole>
              <BuddyName>
                {pawlevel === "비기너" && (
                  <PawImange src="/images/beginer_paw.png" />
                )}
                {pawlevel === "노말" && (
                  <PawImange src="/images/normal_paw.png" />
                )}
                {pawlevel === "마스터" && (
                  <PawImange src="/images/master_paw.png" />
                )}
                {helperNickname}
              </BuddyName>
            </BuddyNameContainer>
            <BuddyNameContainer>
              <BuddyRole>꼬순내</BuddyRole>
              {status === "current" ? (
                <BuddyName>아직 꼬순내 측정이 불가합니다.</BuddyName>
              ) : (
                <BuddyName>{grade}</BuddyName>
              )}
            </BuddyNameContainer>
          </ContentContainer>
        )}
        {role === "buddyhelper" && (
          <ContentContainer>
            <BuddyNameContainer>
              <BuddyRole>버디</BuddyRole>
              <BuddyName>
                {pawlevel === "비기너" && (
                  <PawImange src="/images/beginer_paw.png" />
                )}
                {pawlevel === "노말" && (
                  <PawImange src="/images/normal_paw.png" />
                )}
                {pawlevel === "마스터" && (
                  <PawImange src="/images/master_paw.png" />
                )}
                {helperNickname}
              </BuddyName>
            </BuddyNameContainer>
            <BuddyNameContainer>
              <BuddyRole>꼬순내</BuddyRole>
              {status === "current" ? (
                <BuddyName>아직 꼬순내 측정이 불가합니다.</BuddyName>
              ) : (
                <BuddyName>{grade}</BuddyName>
              )}
            </BuddyNameContainer>
          </ContentContainer>
        )}
        {role === "buddy" && status === "current" && (
          <ButtonContainer>
            <Button onClick={navigateToGallery}>반려 버디 갤러리</Button>
            <Button onClick={openRatingModal}>돌봄 완료</Button>
          </ButtonContainer>
        )}
        {role === "buddy" && status === "after" && (
          <ButtonContainer>
            <Button onClick={navigateToGallery}>반려 버디 갤러리</Button>
          </ButtonContainer>
        )}
        {role === "buddyhelper" && status === "current" && (
          <ButtonContainer>
            <Button onClick={openUploadModal}>갤러리 업로드</Button>
          </ButtonContainer>
        )}
        {role === "buddyhelper" && status === "after" && (
          <ButtonContainer>
            <Button onClick={openRatingModal}>꼬순내 평가</Button>
          </ButtonContainer>
        )}
      </Content>
      <CurrentCheck>
        <Check>
          {" "}
          {status === "current" ? "- 진행중" : <After>- 진행 완료</After>}
        </Check>
      </CurrentCheck>

      {/* Render Modals */}

      {isUploadModalOpen && (
        <UploadModal onClose={closeUploadModal} petId={petId} />
      )}
      {isProfileModalOpen && (
        <ProfileModal onClose={closeProfileModal} startDate={startDate} endDate={endDate} imageSrc={imageSrc} userId={userId} petId={petId} helperSex={helperSex}/>

      
      )}
      {isRatingModalOpen && (
        <RatingModal
          onClose={closeRatingModal}
          postId={postId}
          pickId={helpername}
          startDate={startDate}
          endDate={endDate}
          imageSrc={imageSrc}
          petName={petName}
          pawlevel={pawlevel}
          helpername={helpername}
        />
      )}
    </Container>
  );
};

export default ProfileComponent;
