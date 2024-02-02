import React, { useRef } from 'react';
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

const ImageIcon=styled.img`
  display: flex;
  width: 180px;
  height: 180px;
  margin-bottom: 30px;
  margin-top:140px;
`;

const ImageText=styled.div`
  font-size: 22px;
  font-family: "SCDream5";
`;

const ImageUploadButton=styled.button`
  width: 350px;
  height: 45px;
  border-radius: 30px;
  background-color: #F6BD60;
  border: none;
  font-size: 20px;
  font-family: "SCDream5";
  margin-top: 30px;
`;

const HiddenInput = styled.input`
  /* 파일 입력 숨김 */
  display: none;
`;

const UploadModal = ({ onClose }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // 선택된 파일을 필요에 따라 처리
    console.log('선택된 파일:', selectedFile);
  };

  const handleClick = () => {
    // 사용자 정의 버튼을 클릭하면 파일 입력 클릭 이벤트 트리거
    fileInputRef.current.click();
  };

  return (
    <ModalWrapper>
      <CloseButton onClick={onClose}>X</CloseButton>
      <Content>
        <ImageIcon src="/images/image_modal.png" alt="이미지" />
        <ImageText>사진과 동영상을 선택해주세요.</ImageText>
        <ImageUploadButton onClick={handleClick}>컴퓨터에서 선택</ImageUploadButton>
        {/* 파일 선택용 숨겨진 입력 */}
        <HiddenInput
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </Content>
    </ModalWrapper>
  );
};

export default UploadModal;