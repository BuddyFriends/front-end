import React from 'react'
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

function CurrentCheckPage() {
  return (
    <PageContainer>
    <PowContaioner><Paw src="/images/paw.png" alt="paw"  /><Title>돌봄 로그</Title></PowContaioner>
    <Underline />
    </PageContainer>
  )
}

export default CurrentCheckPage