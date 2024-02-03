import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  padding: 60px;
  align-items: center;
  background-color: #f8edeb;
  flex-direction: column;
  min-height: 70vh;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 1300px;
  margin-bottom: 30px;
`;

const Paw = styled.img`
  width: 38px;
  height: 30px;
  margin-right: 10px;
`;

const HorizontalLine = styled.div`
  width: 1300px;
  height: 2px;
  background-color: #010c26;
  margin-bottom: 30px;
`;

const TitleText = styled.p`
  font-size: 32px;
  font-family: "SCDream7";
  color: #010c26;
  margin: 0;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 25px;
  background-color: #fcd7ba;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 800px;
  padding: 40px 70px;
  margin-bottom: 50px;
  margin-top: 40px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #f6bd60;
  margin: 10px 30px 10px 0px;
`;

const Input = styled.input`
  border: none;
  border-radius: 20px;
  padding: 10px 0px;
  width: 100%;
  height: 30px;
  background-color: #fff1e6;
  font-size: 16px;
  font-family: "SCDream4";
  padding-left: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 20px;
  padding: 20px;
  background-color: #fff1e6;
  margin-bottom: 20px;
  font-size: 16px;
  font-family: "SCDream4";
  padding-left: 20px;
`;

const SubmitButton = styled.button`
  width: 200px;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  background-color: #f6bd60;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  font-family: "SCDream7";
`;

const Select = styled.select`
  padding: 10px;
  border: 0px solid;
  border-radius: 20px;
  background-color: #fff1e6;
  width: calc(50% - 10px);
  height: 50px;
  font-size: 16px;
  font-family: "SCDream4";
`;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const LeftSection = styled.div`
  margin-right: 20px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const Separator = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #ff881a;
  margin: 20px 0;
`;

function ProfileEditPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    password: "",
    nickName: "",
    address: "",
    sex: "",
    age: "",
    intro: "",
    chat: "",
    profileImage: null,
  });
  const fileInputRef = useRef(null); 

  const handleAgeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prevState) => ({
        ...prevState,
        petImage: URL.createObjectURL(file),
      }));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };


  const handleSexChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    navigate("/mypage");
  };

  return (
    <PageContainer>
      <TitleContainer>
        <Paw src="/images/paw.png" alt="paw" />
        <TitleText>프로필 수정하기</TitleText>
      </TitleContainer>
      <HorizontalLine />
      <ProfileContainer>
        <FormContainer>
          <LeftSection onClick={triggerFileInput}>
            <ProfileImage src={formData.petImage || "/images/cat.png"} alt="Profile" />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </LeftSection>
          <RightSection>
            <Input placeholder="닉네임" />
            <FormRow>
              <Select name="age" onChange={handleAgeChange}>
                <option value="10">10대</option>
                <option value="20">20대</option>
                <option value="30">30대</option>
                <option value="40">40대</option>
                <option value="50">50대</option>
                <option value="60">60대 이상</option>
              </Select>
              <Select name="sex" onChange={handleSexChange}>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
              </Select>
            </FormRow>
            <Input placeholder="거주 지역" />
          </RightSection>
        </FormContainer>
        <Separator />
        <TextArea rows="4" placeholder="한 줄 소개" />
      </ProfileContainer>
      <SubmitButton onClick={handleSubmit}>수정하기</SubmitButton>
    </PageContainer>
  );
}

export default ProfileEditPage;
