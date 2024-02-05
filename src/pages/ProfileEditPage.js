import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const userInfo = localStorage.getItem("userInfo");

  const [formData, setFormData] = useState({
    userId: JSON.parse(userInfo).userId,
    nickName: "",
    address: "",
    sex: true,
    age: "",
    intro: "",
    chat: "",
    profileImage: null,
  });
  const fileInputRef = useRef(null);


  const handleNickNameChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleIntroChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
    const isMale = value === "남자" ? true : false;
    setFormData((prevState) => ({
      ...prevState,
      [name]: isMale,
    }));
  };

  const handleSubmit = async () => {
    try {
      const submitFormData = new FormData();
    
      const profileData = {
        userId: formData.userId,
        nickName: formData.nickName,
        address: formData.address,
        sex: formData.sex,
        age: formData.age,
        intro: formData.intro,
      };
    
      submitFormData.append("profile", JSON.stringify(profileData));
    
      if (fileInputRef.current.files[0]) {
        submitFormData.append("image", fileInputRef.current.files[0]);
      }
    
      const response = await axios.put("http://localhost:8080/api/user/update", submitFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    
      if (response.status === 200) {
        console.log("Profile update success:", response.data);

      const updatedUserInfo = {
        ...JSON.parse(localStorage.getItem("userInfo")),
        ...response.data, 
        userImage: response.data.userImage,
      };
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

        navigate("/mypage");
      } else {
        console.error("Profile update failed:", response.status);
      }
    } catch (error) {
      console.error("Error during profile update:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
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
            <ProfileImage
              src={formData.petImage || "/images/cat.png"}
              alt="Profile"
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </LeftSection>
          <RightSection>
            <Input
              name="nickName"
              placeholder="닉네임"
              value={formData.nickName}
              onChange={handleNickNameChange}
            />
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
            <Input
              name="address"
              placeholder="거주 지역"
              value={formData.address}
              onChange={handleAddressChange}
            />
          </RightSection>
        </FormContainer>
        <Separator />
        <TextArea
          name="intro"
          rows="4"
          placeholder="한 줄 소개"
          value={formData.intro}
          onChange={handleIntroChange}
        />
      </ProfileContainer>
      <SubmitButton onClick={handleSubmit}>수정하기</SubmitButton>
    </PageContainer>
  );
}

export default ProfileEditPage;
