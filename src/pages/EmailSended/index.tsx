import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import emailSvg from "../../assets/images/send-email.svg";

// STYLES
const Container = styled.main`
  min-height: 100vh;
  width: 90vw;
  max-width: 1170px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 7.2rem;
  font-weight: 400;
  line-height: 9.2rem;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 580px) {
    font-size: 4.2rem;
    line-height: 7.2rem;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-align: left;
  margin-bottom: 40px;
  max-width: 464px;
  text-align: center;
`;

const Svg = styled.img`
  width: 100%;
  max-width: 220px;
`;

const StyledLink = styled(Link)`
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--purple-light);
  transition: 0.3s;

  &&:hover {
    filter: brightness(1.2);
  }
`;

const EmailSended: React.FC = () => {
  return (
    <Container>
      <Title>Email Sended</Title>
      <Text>
        Nós enviamos um email para você, por favor confirme tambem se o email
        não caiu na caixa de span, faça{" "}
        <StyledLink to="/login">login</StyledLink> para continuar.
      </Text>
      <Svg src={emailSvg} alt="A email has been sended" />
    </Container>
  );
};

export default EmailSended;
