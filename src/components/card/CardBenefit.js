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

const benefitIcon = {
  1: <BiBus />,
  2: <BsFuelPump />,
  3: <BsTelephone />,
  4: <MdLocalGroceryStore />,
  5: <MdFastfood />,
  6: <MdOutlineLocalCafe />,
  7: <GiLipstick />,
  8: <BiSolidDiscount />,
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
`;

const BenefitList = styled.div`
  display: flex;
  flex-direction: row;
`;
