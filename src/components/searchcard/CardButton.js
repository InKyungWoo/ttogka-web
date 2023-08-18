import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCardButton = styled.button`
  width: 90%;
  height: 9rem;
  border-radius: 100px;
  background-color: ${({ clicked }) => (clicked ? '#A5CF61' : '#ffffff')}; 
  padding: 2rem 4rem; 
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ clicked }) => (clicked ? '#ffffff' : '#1b433e')}; 
  border: 2px solid #f9f9f9;
  box-shadow: 
    0px 2px 2px rgba(206, 206, 206, 0.25),
    0px -2px 2px rgba(206, 206, 206, 0.25),
    2px 0px 2px rgba(206, 206, 206, 0.25),
    -2px 0px 2px rgba(206, 206, 206, 0.25);
`;

function CardButton({ text }) {
    const [clicked, setClicked] = useState(false);
  
    return (
      <StyledCardButton clicked={clicked} onClick={() => setClicked(!clicked)}>
        {text}
      </StyledCardButton>
    );
  }
  
  export default CardButton;
