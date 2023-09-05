/** 서비스 선택 페이지 */
import React from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// img
import selectlogo from "../../assets/images/select_logo.png";

//========= my code_1 =========
const SelectMenu = () => {
  const navigate = useNavigate();

  // ======== 버튼 클릭 이벤트 ========
  // 1. 분야별 순위
  const handleButtonClickortouch01 = () => {
    navigate("/category-rank", { replace: false });
  };

  // 2.카드사
  const handleButtonClickortouch02 = () => {
    navigate("/search-card-company", { replace: false });
  };

  // const alert = useAlert();
  // 3. 마이리스트
  const handleButtonClickortouch03 = () => {
    // alert.show("업데이트 후 이용 가능합니다.", {type:"info"});
    // Alert.alert("업데이트 후 이용 가능");
    navigate("/mylist", { replace: false });
  };

  // 4. 사용 방법 보기
  const handleButtonClickortouch04 = () => {
    navigate("/introduction", { replace: false });
  };

  // 5. 로고 이미지 선택시 home화면 이동
  const handleButtonClickortouchLogo = () => {
    navigate("/Home", { replace: false });
  };

  return (
    <Container>
      {/* 1. 로고 */}
      <LogoImg
        src={selectlogo}
        onClick={handleButtonClickortouchLogo}
        onTouchStart={handleButtonClickortouchLogo}
      />

      {/* 2. 폰트 */}
      <TextContainer>
        <BoldText>똑 카</BoldText>
        <NomarText>
          똑똑한 카드 생활을 도와드릴게요!!
          <br />
          어떻게 도와드릴까요??
        </NomarText>
      </TextContainer>

      {/* 3. 버튼 요소들 */}
      <ButtonContainer>
        {/* 1. CategoryRank */}
        <ButtonText
          onClick={handleButtonClickortouch01}
          onTouchStart={handleButtonClickortouch01}
        >
          분야별 순위
        </ButtonText>

        {/* 2. SearchCardCompany */}
        <ButtonText
          onClick={handleButtonClickortouch02}
          onTouchStart={handleButtonClickortouch02}
        >
          카드 선택
        </ButtonText>

        {/* 3.MyList */}
        <ButtonText
          onClick={(handleButtonClickortouch03) =>
            alert("업데이트 후 이용 가능")
          }
          onTouchStart={handleButtonClickortouch03}
        >
          마이 리스트
        </ButtonText>
      </ButtonContainer>

      {/* 4. 사용 방법 보기 */}
      <LinkIntroduction
        onClick={handleButtonClickortouch04}
        onTouchStart={handleButtonClickortouch04}
      >
        &nbsp; 사용 방법 보기 &nbsp;&nbsp;
      </LinkIntroduction>
    </Container>
  );
};

export default SelectMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  min-height: 100vh;
  background: white;

  color: #1b433e;
`;

/** 1.로고 */
const LogoImg = styled.img`
  // width : 33%;
  margin : 5%;
  align-self:flex-end;

  margin : 0% 0% 10% 0%;

  width:10%;
  height:10%;

  width : 10rem;
  height:10rem;

  width : 15rem;
  height : 15rem;
  margin : 2% 2% 0% 0%;

  width : 21rem;
  height:21rem;

  background = url(${selectlogo});

  // position:absolute;
  // top:5%;
  // left:50%;
`;

/** 2. 폰트 */

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BoldText = styled.div`
  font-family: "Happiness-Sans-Title";
  font-size: 6rem;

  padding: 0%;
  margin: 0%;
`;

const NomarText = styled.div`
  width: 100%;
  border: none;
  border-top: 0.3rem solid white;
  margin: 2% 0%;

  font-size: 2rem;

  // 줄바꿈 코드
  white-space: pre-line;
`;

/** 3. 버튼 요소들 */

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin: 0%;
  padding: 0%;
`;

const ButtonText = styled.div`
  // width : 300px;
  // height:100px;
  // padding: 8%;

  //width 랑 height rem이나 % 형식으로 바꾸기
  width: 30rem;
  height: 9rem;
  padding: 2rem;

  margin: 0% 0% 0% 0%;

  border-radius: 100px;
  border: 7.5px solid #a5cf61;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(165, 207, 97, 0.25);

  font-family: Inter;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 600;

  line-height: nomal;
  letter-spacing: -2px;

  text-align: center;

  &:hover {
    border: 7.5px solid #a5cf61;
    background: #a5cf31;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: #fff;
  }
`;

/** 4. 사용 방법 보기 */

const LinkIntroduction = styled.div`
  color: #264e49;

  margin: 5%;
  padding: 1%;
  text-align: center;

  font-size: 2rem;
  font-style: normal;
  font-weight: 600;

  line-height: nomal;
  letter-spacing: -1.5px;

  white-space: pre-wrap;

  &:hover {
    background: #264e49;
    color: #fff;
    cursor: pointer;
  }
`;
