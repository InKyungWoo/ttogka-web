import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import page01 from "../../assets/images/introduction_01.png";
import page02 from "../../assets/images/introduction_02.png";
import page02_2 from "../../assets/images/introduction_02_2.png";
import page03 from "../../assets/images/introduction_03.png";
import page04 from "../../assets/images/introduction_04.png";
import page05 from "../../assets/images/introduction_05.png";
import page06 from "../../assets/images/introduction_06.png";

const Introduction = () => {
  const imgs = [page01, page02, page02_2, page03, page04, page05, page06];
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleImageTouch = () => {
    if (currentIndex === imgs.length - 1) {
      // 마지막 이미지에 도착한 경우
      navigate("/select-menu");
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <Container>
      <IntroductionImg
        onClick={handleImageTouch}
        onTouchStart={handleImageTouch}
        src={imgs[currentIndex]}
      />
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`;

const IntroductionImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: contain;
  margin: 0;
  padding: 0;
`;
