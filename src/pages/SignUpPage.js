import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PageContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8edeb;
  flex-direction: column;
`;

const TitleText = styled.p`
  margin: 0px 0px 50px 0px;
  font-size: 64px;
  font-family: "SCDream7";
  color: #ff881a;
`;

const Box = styled.div`
  margin: 50px 0px 0px 0px;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  border: 3px solid #f6bd60;
  border-radius: 10px;
  width: 540px;
  font-size: 20px;
  font-family: "SCDream4";
`;

const TextInput = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  font-family: "SCDream5";
  color: #010c26;
`;

const TextStudy = styled.p`
  margin: 0px 0px 0px 0px;
  font-size: 32px;
  font-family: "SCDream7";
  color: #010c26;
`;

const HorizontalLine = styled.div`
  width: 540px;
  height: 2px;
  background-color: #010c26;
  margin: 0px 0px 0px 0px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 40px;
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #f6bd60;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: "SCDream7";
  color: white;
  font-size: 26px;
  cursor: pointer;
`;

const TextContent = styled.p`
  margin: 0px 10px 0px 0px;
  font-size: 18px;
  font-family: "SCDream4";
  color: #010c26;
`;

const TextLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-family: "SCDream5";
  color: #ff881a;
`;

const Text = styled.div`
  display: flex;
`;

const RowWrapper = styled.div`
  flex-direction: row;
  display: flex;
  margin: 10px 0px 30px 0px;
  align-items: center;
`;

const GenderButton = styled.button`
  type: button;
  padding: 10px 20px;
  margin-right: 10px;
  border: 3px solid #f6bd60;
  border-radius: 10px;
  background-color: ${(props) => (props.isSelected ? "#F6BD60" : "#FFF")};
  color: ${(props) => (props.isSelected ? "white" : "#F6BD60")};
  font-family: "SCDream6";
  font-size: 16px;
  cursor: pointer;
  outline: none;
  width: 280px;
  &:last-child {
    margin-right: 0;
  }
`;

function SignUpPage() {
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
  });

  const [selectedGender, setSelectedGender] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGenderSelect = (gender, e) => {
    e.preventDefault(); 
    setSelectedGender(gender);
    setFormData((prevState) => ({
      ...prevState,
      sex: gender === "male"
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: formData.userId,
      userName: formData.userName,
      password: formData.password,
      nickName: formData.nickName,
      address: formData.address,
      sex: formData.sex === "male",
      age: parseInt(formData.age, 10),
      intro: formData.intro,
      chat: formData.chat,
      smell: 0,
      grade: "마스터",
    };

    const url = "http://localhost:8080/api/user/join";

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Signup success:", response.data);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        navigate("/");
      } else {
        console.error("Signup failed:", response.status);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <PageContainer>
      <TitleText>Sign Up</TitleText>
      <Text>
        <TextContent>
          이미 <TextLink to="/">Buddy Friends</TextLink> 회원이신가요?
        </TextContent>
        <TextLink to="/login">로그인</TextLink>
      </Text>
      <Box>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <TextInput>이름</TextInput>
            <Input
              type="text"
              name="userName"
              placeholder="당신의 성함을 적어주세요."
              value={formData.userName}
              onChange={handleChange}
            />
            <TextInput>아이디</TextInput>
            <Input
              type="text"
              name="userId"
              placeholder="아이디를 입력해주세요."
              value={formData.userId}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <TextInput>비밀번호</TextInput>
            <Input
              type="password"
              name="password"
              placeholder="패스워드를 입력해주세요."
              value={formData.password}
              onChange={handleChange}
            />
          </InputWrapper>
          <RowWrapper>
            <TextStudy>보호자님 프로필</TextStudy>
          </RowWrapper>
          <HorizontalLine />
          <InputWrapper>
            <TextInput>닉네임</TextInput>
            <Input
              type="text"
              name="nickName"
              placeholder="닉네임을 입력해주세요."
              value={formData.nickName}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <TextInput>거주지</TextInput>
            <Input
              type="text"
              name="address"
              placeholder=""
              value={formData.agaddresse}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <TextInput>성별</TextInput>
            <RowWrapper>
              <GenderButton
                isSelected={selectedGender === "male"}
                onClick={(e) => handleGenderSelect("male", e)}
              >
                남성
              </GenderButton>
              <GenderButton
                isSelected={selectedGender === "female"}
                onClick={(e) => handleGenderSelect("female", e)}
              >
                여성
              </GenderButton>
            </RowWrapper>
          </InputWrapper>
          <InputWrapper>
            <TextInput>나이대</TextInput>
            <select
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{
                padding: "10px",
                border: "3px solid #f6bd60",
                borderRadius: "10px",
                width: "575px",
                fontSize: "20px",
                fontFamily: "SCDream4",
              }}
            >
              <option value="10">10대</option>
              <option value="20">20대</option>
              <option value="30">30대</option>
              <option value="40">40대</option>
              <option value="50">50대</option>
              <option value="60">60대 이상</option>
            </select>
          </InputWrapper>
          <InputWrapper>
            <TextInput>한 줄 소개</TextInput>
            <Input
              type="text"
              name="intro"
              placeholder="한 줄 소개를 입력해주세요."
              value={formData.intro}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <TextInput>오픈프로필 링크 입력</TextInput>
            <Input
              type="text"
              name="chat"
              placeholder="카카오톡 오픈프로필 링크를 입력해주세요."
              value={formData.chat}
              onChange={handleChange}
            />
          </InputWrapper>
          <Button type="submit">회원가입</Button>
        </form>
      </Box>
    </PageContainer>
  );
}

export default SignUpPage;
