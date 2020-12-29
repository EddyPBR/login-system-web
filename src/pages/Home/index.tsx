import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import authenticationSvg from "../../assets/images/authentication.svg";

// STYLES
const Container = styled.main`
  min-height: 100vh;
  width: 90vw;
  max-width: 1170px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 120px;

  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    margin: 40px 0px;
  }

  @media (max-width: 380px) {
    margin: 20px 0px;
  }
`;

const Title = styled.h1`
  font-size: 7.2rem;
  font-weight: 400;
  line-height: 9.2rem;
  margin: 0;

  @media (max-width: 580px) {
    font-size: 4.2rem;
    line-height: 7.2rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin-top: 30px;
`;

const Button = styled(Link)`
  width: 100vw;
  height: 100vh;
  max-width: 150px;
  max-height: 50px;

  margin-top: 60px;
  text-decoration: none;

  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-text);

  background: linear-gradient(
    180deg,
    var(--green-light) 0%,
    var(--green-dark) 60%,
    var(--green-dark) 100%
  );
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  user-select: none;
  transition: ease-in-out 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
  align-self: flex-start;

  &&:hover {
    color: #fff;
    cursor: pointer;
    filter: brightness(0.8);
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.25);
  }

  @media (max-height: 640px) {
    margin-top: 40px;
  }
`;

const Svg = styled.img`
  width: 100%;
  max-width: 640px;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Column>
        <Title>Welcome to Login system</Title>
        <Text>
          A simple login system just for studies and code reuse in projects.
          Feel free and I hope you like it.
        </Text>
        <Button to="/login">Acessar</Button>
      </Column>
      <Column>
        <Svg src={authenticationSvg} alt="A login system api" />
      </Column>
    </Container>
  );
};

export default Home;
