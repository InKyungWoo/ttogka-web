import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// img
import logo_gra from "../../assets/images/logo_gra.png";

// components
import CardButton from "./CardButton";

// api
import { GetMajorCardCompany, GetCardList } from "../../services/card/CardApis";

// zustand store
import useCardStore from "../../stores";

const CardCompanyList = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [brandList, setBrandList] = useState([]);
  const setSelectedCard = useCardStore((state) => state.selectCard); // Zustand 스토어 사용

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetMajorCardCompany();
        // response에 주요 카드사 목록 데이터가 포함됩니다.
        setBrandList(response);
      } catch (error) {
        console.error(
          "주요 카드사 목록을 가져오는 중에 오류가 발생했습니다:",
          error
        );
      }
    };

    fetchData();
  }, []);

  const handleClick = async (brandId) => {
    setIsClicked(!isClicked);
    try {
      const cardList = await GetCardList(brandId, "CRD");
      setSelectedCard(cardList);
      navigate("./card-rank");
    } catch (error) {
      console.error("카드 목록을 가져오는 중에 오류가 발생했습니다:", error);
    }
  };

  // 로고 클릭시 서비스 선택 페이지로 이동
  const handleButtonClickortouchLogo = () => {
    navigate("/select-menu", { replace: false });
  };

  return (
    <Body>
      <Container>
        <LogoGra
          src={logo_gra}
          onClick={handleButtonClickortouchLogo}
          onTouchStart={handleButtonClickortouchLogo}
        />
        <TextContainer>
          <BoldText>카드사 검색</BoldText>
          <NormalText>각 카드사별 순위를 알려드릴게요!!</NormalText>
        </TextContainer>
        {brandList.map((brand, index) => (
          <ButtonContainer key={index}>
            <CardButton
              text={brand.brand_name}
              gridArea={`1 / 1 / 2 / 2`}
              onClick={handleClick}
              isClicked={isClicked}
            />
          </ButtonContainer>
        ))}
        <HrLine />
        <ExtraCard text="기타" onClick={handleClick} isClicked={isClicked} />
      </Container>
    </Body>
  );
};

export default CardCompanyList;
const Body = styled.body`
  background-color: #fafafa;
  height: 100%;
`;

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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  padding: 5%;
  color: #264e49;
`;

const BoldText = styled.div`
  font-size: 4rem;
  font-family: "Happiness-Sans-Title";
  margin-bottom: 1rem;
`;

const NormalText = styled.div`
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 6rem;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

const HrLine = styled.hr`
  width: 90%;
  height: 0.7rem;
  border: none;
  background-color: #f9f9f9;
  border-radius: 30px;
  margin: auto;
  margin-top: 6rem;
  box-shadow: 0px 2px 2px rgba(206, 206, 206, 0.25),
    0px -2px 2px rgba(206, 206, 206, 0.25),
    2px 0px 2px rgba(206, 206, 206, 0.25),
    -2px 0px 2px rgba(206, 206, 206, 0.25);
`;

const ExtraCard = styled.hr`
  width: 90%;
  height: 0.7rem;
  border: none;
  background-color: #f9f9f9;
  border-radius: 30px;
  margin: auto;
  margin-top: 6rem;
  box-shadow: 0px 2px 2px rgba(206, 206, 206, 0.25),
    0px -2px 2px rgba(206, 206, 206, 0.25),
    2px 0px 2px rgba(206, 206, 206, 0.25),
    -2px 0px 2px rgba(206, 206, 206, 0.25);
`;
