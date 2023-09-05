/** 카드사 검색 페이지 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CardCompanyList from "../../components/searchcard/CardCompanyList";

const SearchCardCompany = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false); // clicked state

  const moveToExtraCardPage = () => {
    setClicked(!clicked);
    navigate("/extra-card", { replace: false });
  };

  const moveToPreviousPage = () => {
    setClicked(!clicked);
    navigate("/select-menu", { replace: false });
  };

  return (
    <Container>
      <CardCompanyList />

      <ExtraContainer>
        <ExtraCard clicked={clicked} onClick={moveToExtraCardPage}>
          기타 카드사
        </ExtraCard>
        <PreviousButton clicked={clicked} onClick={moveToPreviousPage}>
          이전
        </PreviousButton>
      </ExtraContainer>
    </Container>
  );
};

export default SearchCardCompany;

const Container = styled.body`
  background-color: #fafafa;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const ExtraContainer = styled.body`
  background-color: #fafafa;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 5rem;
`;

const ExtraCard = styled.button`
  background-color: #fafafa;
  width: 90%;
  height: 9rem;
  border-radius: 100px;
  background-color: ${({ clicked }) => (clicked ? "#264E49" : "#ffffff")};
  font-size: 3.5rem;
  font-weight: bold;
  margin: auto;
  margin-top: 6rem;
  color: ${({ clicked }) => (clicked ? "#ffffff" : "#264E49")};
  border: 2px solid #f9f9f9;
  box-shadow: 0px 1px 1px rgba(206, 206, 206, 0.25),
    0px -1px 1px rgba(206, 206, 206, 0.25),
    1px 0px 1px rgba(206, 206, 206, 0.25),
    -1px 0px 1px rgba(206, 206, 206, 0.25);
`;

const PreviousButton = styled.button`
  background-color: #fafafa;
  width: 90%;
  height: 9rem;
  border-radius: 100px;
  background-color: ${({ clicked }) => (clicked ? "#264E49" : "#ffffff")};
  font-size: 3.5rem;
  font-weight: bold;
  margin: auto;
  margin-top: 6rem;
  color: ${({ clicked }) => (clicked ? "#ffffff" : "#264E49")};
  border: 2px solid #f9f9f9;
  box-shadow: 0px 1px 1px rgba(206, 206, 206, 0.25),
    0px -1px 1px rgba(206, 206, 206, 0.25),
    1px 0px 1px rgba(206, 206, 206, 0.25),
    -1px 0px 1px rgba(206, 206, 206, 0.25);
`;
