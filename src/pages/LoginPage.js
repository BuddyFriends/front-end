import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const PageContainer = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  align-items: center;
  background-color: #f8edeb;
  flex-direction: column;
`;

const TitleText = styled.p`
  margin: 0px 0px 70px 0px;
  font-size: 64px;
  font-family: "SCDream7";
  color: #ff881a;
`;

const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  border: 3px solid #f6bd60;
  border-radius: 10px;
  width: 500px;
  font-size: 18px;
  font-family: "SCDream4";
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 30px;
  margin-bottom: 60px;
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #f6bd60;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: "SCDream7";
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const TextContent = styled.p`
  margin: 0px 10px 0px 0px;
  font-size: 18px;
  font-family: "SCDream4";
  color: #000;
`;

const TextLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-family: "SCDream7";
  color: #ff881a;
`;

const Text = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        {
          loginId,
          password,
        }
      );

      localStorage.setItem("userInfo", JSON.stringify(response.data.data));

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <PageContainer>
      <TitleText>Login</TitleText>
      <InputWrapper>
        <Input
          type="text"
          placeholder="ID"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <Button onClick={handleLogin}>Login</Button>
      <Text>
        <TextContent>
          아직 <TextLink to="/">Buddy Friends</TextLink>회원이 아니신가요?
        </TextContent>
        <TextLink to="/signup">회원가입</TextLink>
      </Text>
    </PageContainer>
  );
};

export default Login;
