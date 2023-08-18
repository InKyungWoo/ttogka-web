import React, { useState } from "react";
import styled from "styled-components";

// api
import { GetCardList } from "../../services/card/CardApis";

// icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const data = {
  card_list: [
    {
      id: 1,
      card: "신한카드1",
      brand: "신한카드",
      image:
        "https://api.card-gorilla.com:8080/storage/card/3/card_img/20085/3card.png",
    },
    {
      id: 2,
      card: "신한카드2입니다",
      brand: "신한카드",
      image:
        "https://api.card-gorilla.com:8080/storage/card/2387/card_img/25536/2387card.png",
    },
    {
      id: 3,
      card: "신한카드3",
      brand: "신한카드",
      image:
        "https://api.card-gorilla.com:8080/storage/card/2418/card_img/28128/2418card.png",
    },
    {
      id: 4,
      card: "신한카드4",
      brand: "신한카드",
      image:
        "https://api.card-gorilla.com:8080/storage/card/129/card_img/20358/129card.png",
    },
    {
      id: 5,
      card: "신한카드5",
      brand: "신한카드",
      image:
        "https://api.card-gorilla.com:8080/storage/card/2458/card_img/28788/2458card.png",
    },
  ],
};

const CardList = ({ props }) => {
  const [currentData, setCurrentData] = useState(data.card_list);
  const [button, setButton] = useState("CRD");
  const getImageSize = (imageUrl, callback) => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      callback(image.naturalWidth, image.naturalHeight);
    };
  };

  const companyId = 1; // test

  const handleArrowButton = (state) => {
    setCurrentData(state);

    if (state === "CRD") {
      const response = GetCardList(companyId, "CRD");
      setCurrentData(response);
    } else if (state === "CHK") {
      const response = GetCardList(companyId, "CHK");
      setCurrentData(response);
    }
  };

  return (
    <CardContainer>
      <NavigateButton>
        <IoIosArrowBack
          className="arrow"
          onClick={() => handleArrowButton("CRD")}
        />
      </NavigateButton>

      <CardListContainer>
        {data.card_list.map((item, index) => (
          <List key={item.id} isLast={index === data.card_list.length - 1}>
            {item.image && (
              <CardImageContainer>
                <CardImg
                  src={item.image}
                  shouldRotate={item.shouldRotate}
                  onLoad={() => {
                    getImageSize(item.image, (width, height) => {
                      const shouldRotate = width < height;
                      item.shouldRotate = shouldRotate;
                      setCurrentData([...currentData]);
                    });
                  }}
                />
              </CardImageContainer>
            )}
            <InfoContainer>
              <CardText>{item.card}</CardText>
              <CardCompanyText>{item.brand}</CardCompanyText>
            </InfoContainer>
          </List>
        ))}
      </CardListContainer>

      <NavigateButton>
        <IoIosArrowForward
          className="arrow"
          onClick={() => handleArrowButton("CHK")}
        />
      </NavigateButton>
    </CardContainer>
  );
};

export default CardList;

const CardContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
`;

const CardListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 6;
  border-radius: 1.5625rem;
  background: linear-gradient(0deg, #fff 0%, #fff 100%),
    rgba(217, 217, 217, 0.3);
  box-shadow: 0px 0px 10px 5px rgba(212, 209, 209, 0.25);
  margin: 3%;
  overflow: auto;
  padding: 1rem;
`;

const NavigateButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;

  .arrow {
    font-size: 2.6rem;
    color: #a5cf61;
  }
`;

const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  aligin-itmes: center;
  ${({ isLast }) =>
    isLast ? "" : "border-bottom: 1px solid rgba(0, 0, 0, 0.1);"}
`;
const CardImageContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImg = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
  transform: ${({ shouldRotate }) =>
    shouldRotate ? "rotate(270deg)" : "none"};
`;

const InfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardText = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardCompanyText = styled.div`
  font-size: 1.2rem;
  font-weight: normal;
`;
