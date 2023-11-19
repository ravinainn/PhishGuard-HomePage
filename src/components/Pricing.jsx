import React from "react";
import styled from "styled-components";
import PriceCard from "./Card/PriceCard";
const Pricing = () => {
  return (
    <>
      <Container>
        <Title>Pricing for every individual and organisation</Title>
        <CardContainer>
          <PriceCard
            level="Free"
            price="₹0/mo"
            User="One User"
            features={[
              "Security Web Extension",
              "Unlimited Usage",
              "Information Analysis",
            ]}
          />
          <PriceCard
            level="Trail"
            price="₹0/mo"
            User="One User"
            features={[
              "Security Web Extension",
              "Unlimited Usage",
              "Information Analysis",
              "Domian Based Analysis",
              "Web Content Based Analysis",
              "Batch Processing",
              "Unlimited API Call",
            ]}
          />
          <PriceCard
            level="Basic"
            price="₹5000/mo"
            User="Everyone"
            features={[
              "Custom Term",
              "Custom Billing",
              "Information Analysis",
              "Domian Based Analysis",
              "Web Content Based Analysis",
              "Batch Processing",
              "Unlimited API Call",
            ]}
          />
          <PriceCard
            level="Pro"
            price="₹0/mo"
            User="Everyone"
            features={[
              "Custom Term",
              "Custom Billing",
              "Information Analysis",
              "Domian Based Analysis",
              "Web Content Based Analysis",
              "Batch Processing",
              "Unlimited API Call",
              "Scheduled Reports",
              "Premium Support",
            ]}
          />
        </CardContainer>
      </Container>
    </>
  );
};
const Container = styled.div`
  /* width: 100%; */

  margin: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  width: 40rem;
  text-align: center;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const UserType = styled.p``;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export default Pricing;
