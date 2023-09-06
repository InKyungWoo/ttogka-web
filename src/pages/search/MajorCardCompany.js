/** 주요 카드사 검색 페이지 */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import CardCompanyList from "../../components/searchCompany/CardCompanyList";

const MajorCardCompany = () => {
  return (
    <Container>
      <CardCompanyList />
      <ExtraButtonContainer>
        <ExtraButton>기타 카드사</ExtraButton>
      </ExtraButtonContainer>
    </Container>
  );
};

export default MajorCardCompany;

const Container = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ExtraButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExtraButton = styled.div`
  width: 80%;
  height: 35%;
  margin: 5% 0;
  padding: 1.4rem 0;
  border: 2px solid #f9f9f9;
  border-radius: 100px;
  box-shadow: 0px 2px 2px rgba(206, 206, 206, 0.25),
    0px -2px 2px rgba(206, 206, 206, 0.25),
    2px 0px 2px rgba(206, 206, 206, 0.25),
    -2px 0px 2px rgba(206, 206, 206, 0.25);
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  background-color: #ffffff;
  color: #1b433e;

  &:hover {
    background-color: #264e49;
    color: #ffffff;
    cursor: pointer;
  }
`;
