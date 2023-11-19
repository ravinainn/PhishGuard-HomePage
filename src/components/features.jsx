import React from "react";
import styled from "styled-components";
import CardComponent from "./Card/FeatureCard";

const Features = () => {
  return (
    <>
      {/* <h1>Hello</h1> */}
      <FeaturesContainer>
        <CardComponent
          title="“AI-Powered Analysis”"
          text="Harness the power of artificial intelligence and machine learning. Detect phishing domains with precision and speed. Stay one step ahead of cyber threats."
          mt="0rem"
          bg="#afd3e2"
          fc="#000"
        />
        <CardComponent
          title="“Real-Time Monitoring”"
          text="Monitor newly registered domains in real-time. Receive instant alerts on potential phishing threats. Act swiftly to protect your organization."
          mt="2.87rem"
          bg="#afd3e2"
          fc="#000"
        />
        <CardComponent
          title="“Flexible Integration”"
          text="Seamlessly integrate with your existing security stack. Enhance your cybersecurity ecosystem. Adapt to your organization's unique requirements."
          mt="5rem"
          bg="#146C94"
          fc="#fff"
        />
        <CardComponent
          title="“Probabilistic Scoring”"
          text="Assign probability scores to phishing domains. Understand the likelihood of a domain being malicious. Prioritize your security efforts effectively."
          mt="2.87rem"
          bg="#afd3e2"
          fc="#000"
        />
        <CardComponent
          title="“Customizable Output”"
          text="Configure output to match your security needs. Receive output via email or SMS. Adapt to your organization's unique requirements.Monitor newly registered domains in real-time"
          mt="0rem"
          bg="#afd3e2"
          fc="#000"
        />
      </FeaturesContainer>
    </>
  );
};
const FeaturesContainer = styled.div`
  margin: 8rem 0;
  display: flex;
  justify-content: space-evenly;
`;

export default Features;
