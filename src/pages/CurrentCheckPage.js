import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileComponent from '../components/ProfileComponent';

const PageContainer = styled.div`
  display: flex;
  background-color: #f8edeb;
  flex-direction: column;
  align-items: center;
`;

const PowContainer = styled.div`
  display: flex;
  margin-top: 50px;
  width: 1200px;
`;

const Paw = styled.img`
  width: 38px;
  height: 30px;
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
`;

const InputWrapper = styled.div`
  margin-bottom: 50px;
  margin: 20px 0px 0px 150px;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 1200px;
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
  background-color: ${props => (props.isSelected ? '#F6BD60' : '#FFF')};
  color: ${props => (props.isSelected ? 'white' : '#F6BD60')};
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
  const [selectedRole, setSelectedRole] = useState('buddy');
  const [logData, setLogData] = useState([]);
  const [status, setStatus] = useState('current'); // 'current' 또는 'after'
  const userId = JSON.parse(localStorage.getItem("userInfo")).userId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const care = status === 'current' ? false : true;

        const response = await fetch(`http://localhost:8080/api/post/log?care=${care}&userId=${userId}&role=${selectedRole}`);
        const data = await response.json();


        if (Array.isArray(data)) {
          setLogData(data);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [status, userId, selectedRole]);

  return (
    <PageContainer>
      <PowContainer>
        <Paw src="/images/paw.png" alt="paw" />
        <Title>돌봄 로그</Title>
      </PowContainer>
      <Underline />
      <InputWrapper>
        <TextInput>돌봄 진행 현황</TextInput>
        <CheckButton
          isSelected={status === 'current'}
          onClick={() => setStatus('current')}
        >
          진행 중
        </CheckButton>
        <CheckButton
          isSelected={status === 'after'}
          onClick={() => setStatus('after')}
        >
          진행 완료
        </CheckButton>
      </InputWrapper>
      <InputWrapper>
        <TextInput>돌봄 버디 역할</TextInput>
        <CheckButton
          isSelected={selectedRole === 'buddy'}
          onClick={() => setSelectedRole('buddy')}
        >
          버디
        </CheckButton>
        <CheckButton
          isSelected={selectedRole === 'buddyhelper'}
          onClick={() => setSelectedRole('buddyhelper')}
        >
          버디 헬퍼
        </CheckButton>
      </InputWrapper>
      <InputWrapper>
        <TextInput2>돌봄 로그 목록</TextInput2>
        {logData.map((log) => (
          <ProfileComponent
            postId={log.postId}
            petId={log.petId}
            key={log.postId}
            imageSrc={log.petImage}
            role={selectedRole}
            status={status}
            petName={log.petName}
            startDate={log.periodStart}
            endDate={log.periodEnd}
            grade={log.smell}
            pawlevel={log.grade}
            helpername={log.pickId}
            userId={log.userId}
            helperSex={log.helperSex}
          />
        ))}
      </InputWrapper>
    </PageContainer>
  );
}

export default CurrentCheckPage;