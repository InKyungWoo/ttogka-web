import React, { useState } from "react";
import styled from "styled-components";

// components
import CardList from "../../components/card/CardList";

// images
import logo from "../../assets/images/logo_gra.png";

const CardRank = () => {
  const [activeButton, setActiveButton] = useState("체크카드");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Container>
      <TopContainer>
        <TextContainer>
          <Title>카드명 순위</Title>
          <Subtitle>카드사별 분야 순위를 알려드릴게요!</Subtitle>
        </TextContainer>
        <LogoImage src={logo} />
      </TopContainer>
      <ButtonContainer>
        <CardButton
          active={activeButton === "체크카드"}
          onClick={() => handleButtonClick("체크카드")}
        >
          체크카드
        </CardButton>
        <CardButton
          active={activeButton === "신용카드"}
          onClick={() => handleButtonClick("신용카드")}
        >
          신용카드
        </CardButton>
      </ButtonContainer>
      <CardList />
      {/* <AdBanner>카드 광고 배너 영역</AdBanner> */}
    </Container>
  );
};

export default CardRank;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
  color: #888;
`;

const LogoImage = styled.img`
  width: 9rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5%;
  margin-top: 5%;
`;

const CardButton = styled.button`
  background-color: ${(props) => (props.active ? "#264E49" : "#ccc")};
  border: none;
  border-radius: 6.25rem;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
`;

const AdBanner = styled.div``;
