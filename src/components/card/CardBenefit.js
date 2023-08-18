import React from "react";
import styled from "styled-components";

// icons
import { BiBus } from "react-icons/bi";
import { BsFuelPump, BsTelephone } from "react-icons/bs";
import {
  MdLocalGroceryStore,
  MdFastfood,
  MdOutlineLocalCafe,
} from "react-icons/md";
import { GiLipstick } from "react-icons/gi";
import { BiSolidDiscount } from "react-icons/bi";

// jihee code
import { 
  GiRoundStar ,
  GiPayMoney ,
  MdOutlineLocalHospital,
  MdPets,
  FaHandsHoldingChild,
  BsCarFrontFill,
  MdSportsSoccer,
  BiSolidCameraMovie,
  MdPayment,
  MdLocalAirport,
  GrLounge,
  MdWorkspacePremium,
  MdCardTravel,
  IoEarthSharp,
  TbBusinessplan,
  FiMoreHorizontal
} from "react-icons/fa";

import { 
  BsFillAirplaneFill,
  BsFillCameraVideoFill,
  BsFillChatDotsFill } from "react-icons/bs";

import { IoMdAddCircle,
  IoIosGlobe,
  IoLogoUsd,
  IoMdMedkit,
  IoMdRibbon,
  IoLogoModelS,

 } from "react-icons/io";

 import {
  BsEmojiLaughing,

 } from "react-icons/bs";

const benefitIcon = {
  1: <BiBus />,
  2: <BsFuelPump />,
  3: <BsTelephone />,
  4: <MdLocalGroceryStore />,
  5: <MdFastfood />,
  6: <MdOutlineLocalCafe />,
  7: <GiLipstick />,
  8: <BiSolidDiscount />,
  // 수정

  //무실적/적립-0
  9: <IoMdAddCircle/>,

  //공과금 /렌탈
  10: <GiPayMoney/>,

  //병원 / 약국-0
  11: <IoMdMedkit/>,

  //애완동물
  12: <MdPets/>,

  //교육/육아-0
  13: <BsEmojiLaughing/>,

  //자동차 하이패스-0
  14: <IoLogoModelS/>,

  //레저 스포츠
  15: <MdSportsSoccer/>,

  //영화/문화-0
  16: <BsFillCameraVideoFill/>,

  //간편결제
  17: <MdPayment/>,

  // 항공-0
  18: <BsFillAirplaneFill/>,

  //항공 라운지
  19: <GrLounge/>,

  //프리미엄-0
  20: <IoMdRibbon/>,

  //여행/숙박
  21: <MdCardTravel/>,

  //해외-0
  22: <IoIosGlobe/>,

  //비즈니스 금융-0
  23: <IoLogoUsd/>,

  //기타 -o
  24: <BsFillChatDotsFill/>
};

const CardBenefit = (props) => {
  const { card, brand, benefit_list } = props.data;
  return (
    <BenefitContainer>
      <BenefitListContainer>
        <CardList>
          <div>{card}</div>
          <div>{brand}</div>
        </CardList>

        <div>
          {benefit_list.map((item, index) => (
            <BenefitList key={index}>
              {benefitIcon[item.category_code]}
              <div>{item.content}</div>
            </BenefitList>
          ))}
        </div>
      </BenefitListContainer>
    </BenefitContainer>
  );
};

export default CardBenefit;

const BenefitContainer = styled.div`
  width: 90%;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 3%;


`;

const BenefitListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 6;
  border-radius: 3rem;
  background: linear-gradient(0deg, #fff 0%, #fff 100%),
    rgba(217, 217, 217, 0.3);
  box-shadow: 0px 0px 20px 2px rgba(170, 170, 170, 0.25);
  margin: 3%;
  overflow: auto;
  padding: 1rem;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;

  // font-size : 7.5rem;
`;

const BenefitList = styled.div`
  display: flex;
  flex-direction: row;
`;