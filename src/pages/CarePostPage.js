import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  padding: 50px;
  display: flex;
  background-color: #f8edeb;
  flex-direction: column;
`;

const PowContaioner=styled.div`
  text-align: center;
  display: flex;
  margin-top: 50px;
`;

const Paw = styled.img`
  width: 38px; /* 이미지의 크기 조절 */
  height: 38px;
  margin-left: 50px;
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
  margin-left: 50px;
`;

const Box = styled.div`
  margin: 50px 0px 0px 150px;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 50px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  border: 3px solid #f6bd60;
  border-radius: 10px;
  width: 744px;
  font-size: 20px;
  font-family: "SCDream4";
`;

const DateSelect=styled.div`
  display:flex;
  a{
    font-size: 20px;
    margin: 20px;
  }
  input{
    width: 370px;
  }
`;


const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 15px;
  border: 3px solid #f6bd60;
  border-radius: 20px;
  width: 925px;
  height: 625px;
  font-size: 20px;
  font-family: 'SCDream4';
`;

const TextInput = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  font-family: 'SCDream5';
  color: #010C26;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 40px;
  margin-bottom: 100px;
  margin-left: 700px;
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

const GenderButton = styled.button`
padding: 10px 20px;
margin-right: 50px; 
border: 3px solid #F6BD60;
border-radius: 10px;
background-color: ${props => props.isSelected ? '#F6BD60' : '#FFF'};
color: ${props => props.isSelected ? 'white' : '#F6BD60'};
font-family: 'SCDream6';
font-size: 16px;
cursor: pointer;
outline: none;
width: 275px;
&:last-child {
  margin-right: 0;
}
`;

function CarePostPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstdate: "",
    lastdate: "",
    gender: "",
    petselect: "",
    posttitle: "",
    postcontent: "",
  });

  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setFormData({
      ...formData,
      gender: gender,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = '';

    const form = new FormData();
    form.append('info', JSON.stringify(formData));

    try {
      const response = await axios.post(url, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        
        localStorage.setItem('userInfo', JSON.stringify(response.data.data));
        navigate('/');
      } else {
        console.error('post failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <PageContainer>
      <PowContaioner><Paw src="/images/paw.png" alt="paw"  /><Title>돌봄글 기본정보</Title></PowContaioner>
      <Underline />
        <form onSubmit={handleSubmit}>
        <Box>
          <InputWrapper>
            <TextInput>돌봄 요청 기간</TextInput>
            <DateSelect>
            <Input
              type="date"
              name="firstdate"
              value={formData.firstdate}
              onChange={handleChange}
            /><a>~</a>
            <Input
              type="date"
              name="lastdate"
              value={formData.lastdate}
              onChange={handleChange}
            />
            </DateSelect>
            </InputWrapper>
            <InputWrapper>
            <TextInput>희망 이웃 성별</TextInput>
            <GenderButton
            isSelected={selectedGender === 'all'}
            onClick={() => setSelectedGender('all')}>
              모두 괜찮아요
            </GenderButton>
            <GenderButton
            isSelected={selectedGender === 'male'}
            onClick={() => setSelectedGender('male')}>
              남성만
            </GenderButton>
            <GenderButton isSelected={selectedGender === 'female'}
            onClick={() => setSelectedGender('female')}>
              여성만
            </GenderButton>
            </InputWrapper>
            <InputWrapper>
            <TextInput>반려동물선택</TextInput>
            <select
            name="petselect"
            value={formData.ageRange}
            onChange={handleChange}
            style={{
              padding: '10px',
              border: '3px solid #f6bd60',
              borderRadius: '10px',
              width: '925px',
              fontSize: '20px',
              fontFamily: 'SCDream4',
              marginBottom: '100px',
            }}>
              <option value="1">뽀로리</option>
            </select>
            </InputWrapper>
        </Box>
      <PowContaioner><Paw src="/images/paw.png" alt="paw"  /><Title>돌봄글 내용작성</Title></PowContaioner>
      <Underline />
        <Box>
        <InputWrapper>
        <TextInput>돌봄글 제목</TextInput>
            <Input
              type="text"
              name="posttitle"
              placeholder="제목을 입력해주세요."
              value={formData.posttitle}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <TextInput>돌봄글 내용</TextInput>
            <Textarea
              type="text"
              name="postcontent"
              placeholder="내용을 입력해주세요."
              value={formData.postcontent}
              onChange={handleChange}
            />
          </InputWrapper>
          <Button type="submit">글등록</Button>
        </Box>
        </form>
    </PageContainer>
  )
}

export default CarePostPage

