import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import authenticationSvg from "../../assets/images/authentication.svg";

// STYLES
const Container = styled.div`
  min-height: 100vh;
  width: 90vw;
  max-width: 1170px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 120px;

  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 7.2rem;
  font-weight: 400;
  line-height: 9.2rem;
  margin: 0;
`;

const Text = styled.p`
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin-top: 30px;
`;

const Button = styled.a`
  width: 100vw;
  height: 100vh;
  max-width: 150px;
  max-height: 50px;

  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;

  background: linear-gradient(
    180deg,
    var(--green-light) 0%,
    var(--green-dark) 100%
  );
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  user-select: none;
  transition: ease-in-out 0.2s;

  margin-top: 60px;
  justify-self: flex-start;
  align-self: flex-start;

  &&:hover {
    cursor: pointer;
    filter: brightness(0.9);
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.25);
  }

  && > a {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: var(--color-title);
  }

  &&:hover > a {
    filter: brightness(3);
  }
`;

const Svg = styled.img`
  width: 100%;
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
        <Button>
          <Link to="/login">Acessar</Link>
        </Button>
      </Column>
      <Column>
        <Svg src={authenticationSvg} alt="A login system api" />
      </Column>
    </Container>
  );
};

export default Home;
