import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'
import GridPage from '../components/GridPage'
import ProfileInfo from '../components/ProfileInfo';
import GalleryProfile from '../components/GalleryProfile';
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8edeb;
  padding: 100px;
`;

/* 
const RowWrapper = styled.div`
  flex-direction: Row;
  display: flex;
  margin: 10px 0px 30px 0px;
  align-items: center;
`;

const ColumnWrapper = styled.div`
  flex-direction: Column;
  display: flex;
  margin: 10px 0px 30px 0px;
  align-items: center;
`;
*/

const ColumnContainer = styled.div`
  text-align: center;
  margin: 10px 0px 30px 0px;
  div{
    display: flex;
  }
`;

const Underline = styled.div`
  height: 2px;
  width: 1200px;
  background-color: black;
  margin-left: 100px;
`;

const CardContainer = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: Row;
  border-radius: 10px;
  background-color: #F9DCC4;
  margin-Top : 50px;
  margin-Bottom : 100px;
  padding: 30px 30px 10px 10px;
`;

const ProfileCard1Container = styled.div`
  display: flex;
  flex-direction: Column;
  text-align: center;
`;

const ProfileCard2Container = styled.div`
  display: flex;
  flex-direction: Column;
  text-align: center;
`;

const CircleContainer = styled.div`
  display : flex;
  flex-direction: Row;
  text-align: center;
  margin-Top : 30px;
  margin-left: 50px;
  margin-Right: 50px;
  margin-Bottom : 30px;
`;

const CircleImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const ProfileDetailGridContainer = styled.div`
  display: grid;
  margin-Top : 30px;
  margin-Bottom: 30px;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 400px;
  margin-bottom:30px;
`;

const Hashtag = styled.div`
  height: 25px;
  background-color: #F6BD60;
  border-radius: 40px;
  padding: 9px 12px 6px 13px;
  margin-top : 10px;
  margin-left: 12px;
  margin-right: 8px;
`;

const Pagination = styled.div`
  display : flex;
  flex-direction: Row;
  margin-Top: 20px;
  align-items: center;
`;

const TextContent = styled.p`
  display : flex;
  flex-direction : Row;
  margin: 0px 10px 0px 0px;
  color: #010C26;
`;

const Text = styled.div`
  display: flex;
  font-size: 18px;
  font-family: "SCDream4";
  margin-left : 10px;
`;

const PageText = styled.div`
  font-family: "SCDream5";
  font-size: 30px;
  margin-Right: 15px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
const IconTextContainer = styled.div`
  display : flex;
  flex-direction : row;
  align-items: center;
`;

const Paw = styled.img`
  width: 38px; /* 이미지의 크기 조절 */
  height: 30px;
  margin-left: 100px;
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family : "SCDream7";
  text-align: center;
`;

const Arrows = styled.img`
  width: 10px;
  height: 30px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

/*
const items = [1, 2, 3, 4, 5];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}
*/


function GalleryPage() {

  const { petId } = useParams();
  const [petDetails, setPetDetails] = useState(null);

  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchPetDetails = async () => {
      // localStorage에서 userInfo를 가져온 후 userId 추출
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const userId = userInfo?.userId;

      try {
        // petId와 userId를 사용하여 API 호출
        const response = await axios.get(`http://localhost:8080/api/pet/get`, {
          params: { userId, petId }
        });
        setPetDetails(response.data);
      } catch (error) {
        console.error('Failed to fetch pet details:', error);
      }
    };

    const fetchPictures = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/picture/list?petId=${petId}`);
        setPictures(response.data.map(picture => picture.pictureAdd)); // 사진 URL 추출하여 상태 업데이트
      } catch (error) {
        console.error('Failed to fetch pictures:', error);
      }
    };

    fetchPetDetails();
    fetchPictures();
  }, [petId]);




    // 페이지네이션
/*
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    const newOffset = selectedPage * itemsPerPage;
    console.log(`User requested page number ${selectedPage + 1}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  
  */


  return (
    <div>
      <ProfileContainer>
        <ColumnContainer>
          <IconTextContainer><Paw src="/images/paw.png" alt="paw" /><Title>반려 버디 프로필</Title></IconTextContainer>
          <Underline/>
        </ColumnContainer>
        <GalleryProfile petDetails={petDetails} />
        {/* 반려동물의 사진을 보여주는 GridPage 컴포넌트에도 petId 또는 petDetails를 전달할 수 있습니다. */}
        <ColumnContainer>
          <IconTextContainer><Paw src="/images/paw.png" alt="paw" /><Title>반려 버디 추억 갤러리</Title></IconTextContainer>
          <Underline/>
        </ColumnContainer>

        <GridPage pictures={pictures} />

        {/* <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel=""
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
        /> */}

        <Pagination>
          <PageText>1</PageText>
          <PageText>2</PageText>
          <PageText>3</PageText>
          <PageText>4</PageText>
          <PageText>5</PageText>
          <Arrows src="/images/right_arrow.png" alt="right_arrow"/>
        </Pagination>
      </ProfileContainer>
    </div>
  )
}


export default GalleryPage