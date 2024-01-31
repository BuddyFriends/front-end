// ProfileInfo.js
import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px 10px 10px
`;

const Label = styled.span`
  font-size: 22px;
  font-family: "SCDream5";
  color: #FF881A;
  margin-right: 10px;
`;

const Value = styled.span`
  font-size: 22px;
  font-family: "SCDream5";
`;

function ProfileInfo({ label, value }) {
  return (
    <InfoContainer>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </InfoContainer>
  );
}

export default ProfileInfo;
