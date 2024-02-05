import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const UploadModal = ({ onClose, petId }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      const apiUrl = "http://localhost:8080/api/picture/upload";
      const formData = new FormData();
      formData.append("pet", JSON.stringify({ "petId": petId }));
      formData.append("image", selectedFile);

      const response = await axios.post(apiUrl, formData);

      // 서버 응답 처리
      if (response.status === 200) {
        alert('이미지가 성공적으로 업로드되었습니다.');
        onClose();  // 모달 닫기 또는 다음 작업 수행
      } else {
        alert('이미지 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error('이미지 업로드 중 오류 발생:', error);
      alert('이미지 업로드 중 오류가 발생했습니다.');
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <ModalWrapper>
      <CloseButton onClick={onClose}>X</CloseButton>
      <Content>
        <ImageIcon src="/images/image_modal.png" alt="이미지" />
        <ImageText>사진과 동영상을 선택해주세요.</ImageText>
        <ImageUploadButton onClick={handleClick}>컴퓨터에서 선택</ImageUploadButton>
        <HiddenInput
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {selectedFile && (
          <ImageUploadButton onClick={handleUpload}>
            업로드
          </ImageUploadButton>
        )}
      </Content>
    </ModalWrapper>
  );
};

export default UploadModal;