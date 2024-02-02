import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #F9DCC4;
  padding: 20px;
  border-radius: 40px;
  z-index: 999;
  width: 1100px;
  height: 560px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
  font-family: "SCDream5";
`;

const Content=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProfileModal = ({ onClose }) => {
  
  return (
    <ModalWrapper>
      <CloseButton onClick={onClose}>X</CloseButton>
      <Content>
        
      </Content>
    </ModalWrapper>
  );
};

export default ProfileModal;