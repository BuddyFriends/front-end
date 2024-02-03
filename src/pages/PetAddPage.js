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
  width: 1000px;
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
  border-radius: 25px;
  padding: 10px 0px;
  width: 100%;
  height: 30px;
  background-color: #fff1e6;
  font-size: 16px;
  font-family: "SCDream4";
  padding-left: 20px;
  margin-bottom: 15px;
`;

const SmallInput = styled.input`
  border: none;
  border-radius: 25px;
  padding: 10px 0px;
  width: calc(30% - 0px);
  height: 30px;
  background-color: #fff1e6;
  font-size: 16px;
  font-family: "SCDream4";
  padding-left: 20px;
  margin-bottom: 10px;
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
  padding: 15px 10px;
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
  border-radius: 25px;
  background-color: #fff1e6;
  width: calc(30% - 10px);
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

const AreaContainer = styled.div`
  display: flex;
  width: 100%;
`;

const AreaTitle = styled.div`
  font-size: 20px;
  font-family: "SCDream7";
  color: #ff881a;
  margin: 0;
  width: 120px;
  margin-top: 15px;
`;

function PetAddPage() {
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
    petImage: null,
  });
  const fileInputRef = useRef(null); 

  const handleSpeciesChange = (e) => {
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

  const handleSubmit = () => {
    console.log(formData);
    navigate("/mypage");
  };

  return (
    <PageContainer>
      <TitleContainer>
        <Paw src="/images/paw.png" alt="paw" />
        <TitleText>반려동물 등록하기</TitleText>
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
            <Input placeholder="이름" />
            <FormRow>
              <SmallInput placeholder="나이" />
              <Select name="species" onChange={handleSpeciesChange}>
                <option value="남자">강아지</option>
                <option value="여자">고양이</option>
                <option value="여자">햄스터</option>
                <option value="여자">조류</option>
                <option value="여자">기타</option>
              </Select>
              <SmallInput placeholder="품종" />
            </FormRow>
            <Input placeholder="좋아하는 것" />
            <Input placeholder="싫어하는 것" />
          </RightSection>
        </FormContainer>
        <Separator />
        <AreaContainer>
          <AreaTitle>복용약</AreaTitle>
          <TextArea rows="4" placeholder="복용중인 약을 작성해주세요" />
        </AreaContainer>
        <Separator />
        <AreaContainer>
          <AreaTitle>태그</AreaTitle>
          <TextArea rows="4" placeholder="#귀여워#멋있어#산책좋아~" />
        </AreaContainer>
      </ProfileContainer>
      <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
    </PageContainer>
  );
}

export default PetAddPage;
