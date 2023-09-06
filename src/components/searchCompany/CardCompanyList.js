import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// img
import logo_gra from "../../assets/images/logo_gra.png";

// api
import { GetMajorCardCompany, GetCardList } from "../../services/card/CardApis";

// data
const data = {
  brandList: [
    {
      id: 1,
      brand_name: "신한카드",
    },
    {
      id: 2,
      brand_name: "BC카드",
    },
    {
      id: 3,
      brand_name: "삼성카드",
    },
    {
      id: 4,
      brand_name: "KB국민카드",
    },
    {
      id: 5,
      brand_name: "롯데카드",
    },
    {
      id: 6,
      brand_name: "하나카드",
    },
    {
      id: 7,
      brand_name: "우리카드",
    },
    {
      id: 8,
      brand_name: "씨티카드",
    },
    {
      id: 9,
      brand_name: "현대카드",
    },
    {
      id: 10,
      brand_name: "NH농협카드",
    },
    {
      id: 11,
      brand_name: "카카오뱅크",
    },
    {
      id: 12,
      brand_name: "케이뱅크",
    },
  ],
};

const CardCompanyList = () => {
  const navigate = useNavigate();
  const [brandList, setBrandList] = useState(data.brandList);

  // const [brandList, setBrandList] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await GetMajorCardCompany();
  //     setBrandList(response);
  //   };

  //   fetchData();
  // }, []);

  const handleLogoClick = () => {
    navigate("/select-menu");
  };

  const handleButtonClick = async (brandId) => {
    const response = await GetCardList(brandId, "CRD");
    navigate("/card-rank", { state: { cardList: response } });
  };

  return (
    <Container>
      <LogoGra
        src={logo_gra}
        onClick={handleLogoClick}
        onTouchStart={handleLogoClick}
      />
      <TextContainer>
        <BoldText>카드사 검색</BoldText>
        <NormalText>각 카드사별 순위를 알려드릴게요!!</NormalText>
      </TextContainer>
      <ButtonContainer>
        {brandList.map((brand, index) => (
          <CardButton
            key={brand.id}
            onClick={() => handleButtonClick(brand.id)}
          >
            {brand.brand_name}
          </CardButton>
        ))}
      </ButtonContainer>
    </Container>
  );
};

export default CardCompanyList;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const LogoGra = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  padding: 5%;
  color: #264e49;
`;

const BoldText = styled.div`
  font-size: 3rem;
  font-family: "Happiness-Sans-Title";
  margin-bottom: 1rem;
`;

const NormalText = styled.div`
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 2rem;
  align-items: center;
`;

const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43%;
  height: 8rem;
  margin: 0.7rem;
  border-radius: 100px;
  font-size: 2.2rem;
  font-weight: bold;
  background-color: #ffffff;
  color: #1b433e;
  border: 2px solid #f9f9f9;
  box-shadow: 0px 2px 2px rgba(206, 206, 206, 0.25),
    0px -2px 2px rgba(206, 206, 206, 0.25),
    2px 0px 2px rgba(206, 206, 206, 0.25),
    -2px 0px 2px rgba(206, 206, 206, 0.25);

  &:hover {
    background-color: #a5cf61;
    color: #ffffff;
    cursor: pointer;
  }
`;
