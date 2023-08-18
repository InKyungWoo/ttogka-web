import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


import logo_gra from "../../assets/images/logo_gra.png";
import CardButton from "./CardButton";

// api
import {GetCardList} from "../../services/card/CardApis"

const data = {
  "brand_list": [
    {
      "id": 1,
      "brand_name": "신한카드"
    },
    {
      "id": 2,
      "brand_name": "BC카드"
    },
    {
      "id": 3,
      "brand_name": "삼성카드"
    },
    {
      "id": 4,
      "brand_name": "KB국민카드"
    },
    {
      "id": 5,
      "brand_name": "롯데카드"
    },
    {
      "id": 6,
      "brand_name": "하나카드"
    },
    {
      "id": 7,
      "brand_name": "우리카드"
    },
    {
      "id": 8,
      "brand_name": "씨티카드"
    },
    {
      "id": 9,
      "brand_name": "현대카드"
    },
    {
      "id": 10,
      "brand_name": "NH농협카드"
    },
    {
      "id": 11,
      "brand_name": "카카오뱅크"
    },
    {
      "id": 12,
      "brand_name": "케이뱅크"
    }
  ]
};


const CardCompanyList = () => {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);

  const [data1, setData1] = useState(data.brand_list.slice(0, 4));
  const [data2, setData2] = useState(data.brand_list.slice(4, 8));
  const [data3, setData3] = useState(data.brand_list.slice(8, 12));

  const handleClick = () => {
    setIsClicked(!isClicked);

    // 카드 목록 api 호출
    // const response = GetCardList(id자리, "CRD");
    // navigate("./card-rank", {state: response});
  };

  // 로고 클릭시 서비스 선택 페이지로 이동
  const handleButtonClickortouchLogo = () => {
    navigate("/select-menu", { replace: false });
  };

  return (
    <Body>
      <Container>
        <Logo_gra
          src={logo_gra}
          onClick={handleButtonClickortouchLogo}
          onTouchStart={handleButtonClickortouchLogo}
        />
        <TextContainer>
          <BoldText>카드사 검색</BoldText>
          <NormalText>각 카드사별 순위를 알려드릴게요!!</NormalText>
        </TextContainer>

        <ButtonContainer>
          {data1.map((el, idx) => (
            <CardButton
              key={idx}
              text={el.brand_name}
              gridArea="1 / 1 / 2 / 2"
              onClick={handleClick}
              isClicked={isClicked}
            />
          ))}
        </ButtonContainer>
        <HrLine />

        <ButtonContainer>
          {data2.map((el, idx) => (
            <CardButton
              key={idx}
              text={el.brand_name}
              gridArea="1 / 1 / 2 / 2"
              onClick={handleClick}
              isClicked={isClicked}
            />
          ))}
        </ButtonContainer>
        <HrLine />

        <ButtonContainer>
          {data3.map((el, idx) => (
            <CardButton
              key={idx}
              text={el.brand_name}
              gridArea="1 / 3 / 2 / 4"
              onClick={handleClick}
              isClicked={isClicked}
            />
          ))}
        </ButtonContainer>

        {/* <ButtonContainer>
          <CardButton
            text="우 리"
            gridArea="1 / 1 / 2 / 2"
            onClick={handleClick}
            isClicked={isClicked}
          />
          <CardButton
            text="하 나"
            gridArea="2 / 1 / 3 / 2"
            onClick={handleClick}
            isClicked={isClicked}
          />
          <CardButton
            text="신 한"
            gridArea="3 / 1 / 4 / 2"
            onClick={handleClick}
            isClicked={isClicked}
          />
          <CardButton
            text="국 민"
            gridArea="4 / 1 / 5 / 2"
            onClick={handleClick}
            isClicked={isClicked}
          />
        </ButtonContainer>
        <HrLine />
        <ButtonContainer>
          <CardButton
            text="비 씨"
            gridArea="1 / 2 / 2 / 3"
            onClick={handleClick}
            isClicked={isClicked}
          />
          <CardButton
            text="삼 성"
            gridArea="2 / 2 / 3 / 3"
            onClick={handleClick}
            isClicked={isClicked}
          />
          <CardButton
            text="현 대"
            gridArea="3 / 2 / 4 / 3"
            onClick={handleClick}
            isClicked={isClicked}
          />
          <CardButton
            text="롯 데"
            gridArea="4 / 2 / 6 / 3"
            onClick={handleClick}
            isClicked={isClicked}
          />
        </ButtonContainer>
        <HrLine />
        <ButtonContainer>
          <CardButton
            text="수 협"
            gridArea="1 / 3 / 2 / 4"
            onClick={handleClick}
            isClicked={isClicked}
          />
          <CardButton
            text="씨 티"
            gridArea="2 / 3 / 3 / 4"
            onClick={handleClick}
            isClicked={isClicked}
          />
          <CardButton
            text="NH농협"
            gridArea="3 / 3 / 4 / 4"
            onClick={handleClick}
            isClicked={isClicked}
          />
          <CardButton
            text="IBC기업"
            gridArea="4 / 3 / 6 / 4"
            onClick={handleClick}
            isClicked={isClicked}
          />
        </ButtonContainer> */}

        <ExtraCard text="기 타" onClick={handleClick} isClicked={isClicked} />
      </Container>
    </Body>
  );
};

export default CardCompanyList;

const Body = styled.body`
  background-color: #fafafa;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column; /* 컬럼 방향으로 배치 */
`;

const Logo_gra = styled.img`
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
  justify-items: center; /* 가로축 가운데 정렬 */
  align-items: center; /* 세로축 가운데 정렬 */
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
  box-shadow: 
    0px 2px 2px rgba(206, 206, 206, 0.25),
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
  box-shadow: 
    0px 2px 2px rgba(206, 206, 206, 0.25),
    0px -2px 2px rgba(206, 206, 206, 0.25), 
    2px 0px 2px rgba(206, 206, 206, 0.25),
    -2px 0px 2px rgba(206, 206, 206, 0.25);
`;
