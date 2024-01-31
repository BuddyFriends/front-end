import React, { useState } from 'react';
import styled from "styled-components";

const PageContainer = styled.div`
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

const InputWrapper = styled.div`
  margin-bottom: 50px;
  margin: 20px 0px 0px 150px;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
  font-family: 'SCDream5';
  color: #010C26;
`;

const TextInput2 = styled.p`
  margin-top: 100px;
  margin-bottom: 10px;
  font-size: 24px;
  font-family: 'SCDream5';
  color: #010C26;
`;

const CheckButton = styled.button`
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

function CurrentCheckPage() {

  const [selectedCheck, setSelectedCheck] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  return (
    <PageContainer>
    <PowContaioner><Paw src="/images/paw.png" alt="paw"  /><Title>돌봄 로그</Title></PowContaioner>
    <Underline />
    <InputWrapper>
    <TextInput>돌봄 진행 현황</TextInput>
    <CheckButton
      isSelected={selectedCheck === 'current'}
      onClick={() => setSelectedCheck('current')}>
        진행 중
    </CheckButton>
    <CheckButton isSelected={selectedCheck === 'after'}
     onClick={() => setSelectedCheck('after')}>
      진행 완료
    </CheckButton>
    </InputWrapper>
    <InputWrapper>
    <TextInput>돌봄 버디 역할</TextInput>
    <CheckButton
      isSelected={selectedRole === 'buddy'}
      onClick={() => setSelectedRole('buddy')}>
        버디
    </CheckButton>
    <CheckButton isSelected={selectedRole === 'helper'}
     onClick={() => setSelectedRole('helper')}>
      버디 헬퍼
    </CheckButton>
    </InputWrapper>
    <InputWrapper>
    <TextInput2>돌봄 로그 목록</TextInput2>

    </InputWrapper>
    </PageContainer>
  )
}

export default CurrentCheckPage