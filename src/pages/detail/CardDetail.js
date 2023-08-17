import React from "react";
import styled from "styled-components";

// images
import background from "../../assets/images/detail-background.jpg";

// components
import CardBenefit from "../../components/card/CardBenefit";

const data = {
  id: 1,
  card: "신한카드 Hi-Point",
  brand: "신한카드",
  image:
    "https://api.card-gorilla.com:8080/storage/card/1/card_img/20083/1card.png",
  benefit_list: [
    {
      category: "쇼핑",
      category_code: 5,
      content: "백화점/할인점/홈쇼핑·온라인몰 1.0~5.0% 적립",
    },
    {
      category: "화장품",
      category_code: 7,
      content: "전국 가맹점 0.2~2.0% 적립해외 가맹점 1~5% 적립",
    },
  ],
};

const CardDetail = () => {
  return (
    <Container>
      <ImageContanier>
        <img src={data.image} className="card-image" alt="{data.card}" />
      </ImageContanier>
      <CardBenefit data={data} />
    </Container>
  );
};

export default CardDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
`;

const ImageContanier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;

  .card-image {
    margin: 10%;
    width: 25rem;
  }
`;
