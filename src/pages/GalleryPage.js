import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import GridPage from '../components/GridPage'
import ProfileInfo from '../components/ProfileInfo';
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8edeb;
  padding: 100px;
  margin-bottom: 20px;
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


function GalleryPage({ itemsPerPage }) {

  const [petData, setPetData] = useState([]); // 반려동물 데이터를 저장할 상태

  // 로컬 스토리지에서 userInfo 가져오기
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const userId = userInfo ? userInfo.userId : null;

  useEffect(() => {
    const fetchPetData = async () => {

      if (userId) {
        try {
          // axios를 사용하여 서버 요청
          const response = await axios.get(`http://localhost:8080/api/pet/list`, {
            params: {
              userId: userId // 쿼리 파라미터로 userId 전달
            }
          });
          setPetData(response.data); // 받아온 데이터로 상태 업데이트
        } catch (error) {
          console.error('Error fetching pet data:', error);
        }
      }
    };

    fetchPetData();
  }, []);


      // 초기값으로 설정할 해시태그
      const initialHashtags = [
        '#애교둥이',
        '#간식을사랑해',
        '#먹보',
        '#가끔은새침해요',
        '#산책하고뛰는걸좋아해요',
      ];
  
      // 해시태그를 저장할 상태와, 서버에서 받아온 값을 저장할 상태
    const [hashtags, setHashtags] = useState(initialHashtags);
    const [serverHashtags, setServerHashtags] = useState([]);
  
    // 서버에서 값을 받아와서 hashtags 업데이트
    useEffect(() => {
      // 서버에서 값 받아오는 로직
      // 예시: fetch('서버 API 주소').then(response => response.json()).then(data => setServerHashtags(data));
    }, []);

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

        <CardContainer>
          <ProfileCard1Container>
            {petData.map((pet) =>(
              <CircleContainer key={pet.petId}>
              <CircleImage src={pet.petImage}/>
            </CircleContainer>
            ))}
          <Title>뽀로리</Title>
          </ProfileCard1Container>

          <ProfileCard2Container>
            {petData.map((pet) =>(
              <ProfileDetailGridContainer key={pet.petId}>
              <ProfileInfo label="나이" value={pet.petName} />
              <ProfileInfo label="품종" value={pet.type} />
              <ProfileInfo label="좋아하는 것" value={pet.petLike} />
              <ProfileInfo label="싫어하는 것" value={pet.petDislike}/>
              <ProfileInfo label="복용약" value={pet.medicine} />
            </ProfileDetailGridContainer>
            ))}
          <HashtagContainer>
            {/* 초기값 또는 서버에서 받아온 값으로 매핑 */}
            {serverHashtags.length > 0 ? serverHashtags.map((tag, index) => (
              <Hashtag key={index}>{tag}</Hashtag>
            )) : hashtags.map((tag, index) => (
              <Hashtag key={index}>{tag}</Hashtag>
            ))}
        </HashtagContainer>
          </ProfileCard2Container>

        </CardContainer>

        <ColumnContainer>
          <IconTextContainer><Paw src="/images/paw.png" alt="paw" /><Title>반려 버디 추억 갤러리</Title></IconTextContainer>
          <Underline/>
        </ColumnContainer>

        <GridPage />

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