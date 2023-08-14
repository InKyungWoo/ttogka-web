import React from "react";
import styled from "styled-components";

// images
import background from "../../assets/images/detail-background.jpg";

const DetailCard = () => {
  return <Container>상세 페이지</Container>;
};

export default DetailCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${background});
  color: white;
`;
