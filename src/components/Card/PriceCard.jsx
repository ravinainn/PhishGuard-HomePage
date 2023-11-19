import React from "react";
import styled from "styled-components";

const PriceCard = ({ level, price, User, features }) => {
  return (
    <>
      <Container>
        <flexWrapper>
          <Level>{level}</Level>
          <QuotedPrice>{price}</QuotedPrice>
          <UserBtn>{User}</UserBtn>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </FeatureList>
        </flexWrapper>
        <PriceButton>Get Started</PriceButton>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 13.5rem;
  height: 35rem;
  border-radius: 2rem;
  padding: 1.5rem;

  background-color: #afd3e2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const flexWrapper = styled.div``;
const Level = styled.h1`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const QuotedPrice = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const UserBtn = styled.button`
  border-style: none;
  background: transparent;
  border-radius: 1rem;
  border: 1px solid #000;
  padding: 0.5rem 1rem;

  color: #000;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const FeatureList = styled.ul`
  padding-left: 0;
`;
const FeatureItem = styled.li`
  list-style: none;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PriceButton = styled.button`
  border-style: none;
  color: #fff;
  background-color: #19a7ce;
  border-radius: 0.5rem;

  text-align: center;
  height: 2rem;

  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export default PriceCard;
