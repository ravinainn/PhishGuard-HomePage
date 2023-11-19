import React from "react";
import styled from "styled-components";
import ExtensionCard from "./Card/ExtensionCard";

const WebExtension = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <Title>Your Ultimate Phishing Detection Web Extension</Title>
          <Text>
            With PhishGuard, you can confidently surf the web knowing that your
            personal information and security are protected. Our web extension
            combines cutting-edge AI/ML technology with real-time URL analysis
            to detect and block phishing websites instantly. Say goodbye to
            phishing attempts and protect your personal and financial
            information from falling into the wrong hands. Install PhishGuard
            today and experience the peace of mind that comes with advanced
            phishing detection and prevention technology. Your online security
            is our mission!
          </Text>
        </TextContainer>
        <ExtensionCard />
      </Container>
    </>
  );
};
const Container = styled.div`
  margin-left: 6rem;
  margin-right: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextContainer = styled.div`
  width: 30rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Text = styled.p`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default WebExtension;
