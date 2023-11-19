import React from "react";
import styled from "styled-components";
import InputBar from "./InputBar/InputBar";
// import { InputBar } from "./InputBar/InputBar";

const HeroSection = () => {
  return (
    <>
      <Container>
        <HeroTitle>Phishing Domain Detection Made Smarter and Safer</HeroTitle>
        <HeroText>
          Our cutting-edge SaaS solution combines the power of artificial
          intelligence and machine learning to make phishing domain detection
          not only smarter but also safer than ever before. In today's digital
          landscape, where cyber threats loom large, our platform acts as your
          unwavering sentinel, tirelessly monitoring and analyzing newly
          registered domains. With real-time alerts and probabilistic scoring,
          we empower you to defend against phishing attacks with unmatched
          precision and speed.
        </HeroText>
        <InputSection>
          <InputBar placeHolder={"Enter the URL"} buttonText={"Analyse URL"} />
          {/* <InputBar placeHolder="Enter the URL" buttonText="Analyse URL" /> */}
        </InputSection>
      </Container>
    </>
  );
};
const Container = styled.div`
  margin: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
const HeroTitle = styled.h1`
  padding-top: 4rem;
  color: #000;
  text-align: center;
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const HeroText = styled.p`
  color: #000;
  padding: 0 4rem;
  text-align: center;
  /* font-family: Sk-Modernist; */
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InputSection = styled.div``;

export default HeroSection;
