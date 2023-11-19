import React from "react";
import styled from "styled-components";
let marginTop = "0rem";
const CardComponent = ({ title, text, mt, bg, fc }) => {
  return (
    <>
      <CardContainer style={{ marginTop: mt, backgroundColor: bg, color: fc }}>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardContainer>
    </>
  );
};
const CardContainer = styled.div`
  padding: 1.5rem;
  width: 12.7rem;
  height: 17.4rem;
  border-radius: 2rem;
  background-color: #afd3e2;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const CardTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CardText = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
`;
export default CardComponent;
