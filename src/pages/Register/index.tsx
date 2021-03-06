import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import registerSvg from "../../assets/images/register.svg";

// STYLES
const Container = styled.main`
  min-height: 100vh;
  width: 90vw;
  max-width: 1170px;

  display: grid;
  grid-template-columns: 70% 30%;
  column-gap: 30px;

  justify-content: center;
  align-items: center;

  overflow: hidden;

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
  align-items: flex-start;

  @media (max-width: 960px) {
    margin: 40px 0px;
    width: auto;
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
  margin-bottom: 10px;

  @media (max-width: 580px) {
    font-size: 4.2rem;
    line-height: 7.2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 400;
  line-height: auto;
  margin: 0;
  max-width: 350px;
  text-align: center;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-align: left;
  margin-bottom: 40px;
`;

const Button = styled.button`
  width: 100vw;
  height: 100vh;
  max-width: 150px;
  max-height: 50px;

  text-decoration: none;

  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-text);

  background: linear-gradient(
    180deg,
    var(--purple-light) 0%,
    var(--purple-dark) 58%,
    var(--purple-dark) 100%
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
`;

const Svg = styled.img`
  width: 100%;
  max-width: 260px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 640px;
  margin-left: 30px;

  @media (max-width: 960px) {
    margin-left: 0;
  }
`;

const FormColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
`;

const Label = styled.label`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.8rem;
  margin-bottom: 5px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  max-width: 90vw;
  height: 4.4rem;
  background-color: var(--color-title);
  border: 1px solid;
  border-radius: 0.5rem;
  color: var(--color-background-dark);
  padding: 0.8rem;
  font: 700 1.4rem "Saira", sans-serif;
  margin-bottom: 30px;

  &&:focus {
    border: 2px solid var(--green-light);
    background-color: var(--color-title);
    color: var(--color-background-dark);
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 8px;

  && > p {
    text-align: right;
    margin: 0;
    margin-left: 3rem;
  }

  @media (max-width: 380px) {
    && > p {
      text-align: left;
      margin-left: 1.2rem;
    }
  }
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  color: var(--color-title);
  margin-left: 4px;
  transition: 0.2s;

  &&:hover {
    color: var(--purple-light);
  }
`;

const Background = styled.div`
  width: 54vw;
  height: 160vh;
  background: linear-gradient(
    var(--color-background-dark),
    var(--purple-light)
  );
  position: fixed;
  top: -100px;
  right: -200px;
  transform: rotate3d(1, 1, 1, 20deg);
  z-index: -1;
`;

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    // need create a call for a API
    console.log({
      email,
      cEmail,
      password,
      cPassword,
    });
  };

  return (
    <Container>
      <Column>
        <Form onSubmit={(event) => handleRegister(event)} method="POST">
          <Title>Register</Title>
          <Text>
            Informe seu email e crie uma senha respondendo o formulário logo
            abaixo e seja bem vindo ao login-system!
          </Text>
          <FormColumn>
            <Label htmlFor="email">
              Email
              <Input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Label>
            <Label htmlFor="cEmail">
              Confirme seu email
              <Input
                type="text"
                id="cEmail"
                name="cEmail"
                value={cEmail}
                onChange={(event) => setCEmail(event.target.value)}
              />
            </Label>
          </FormColumn>
          <FormColumn>
            <Label htmlFor="password">
              Senha
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Label>
            <Label htmlFor="cPassword">
              Confirme sua senha
              <Input
                type="password"
                id="cPassword"
                name="cPassword"
                value={cPassword}
                onChange={(event) => setCPassword(event.target.value)}
              />
            </Label>
          </FormColumn>
          <Row>
            <Button>Register</Button>
            <Text>
              Possui uma conta?
              <StyledLink to="/login">Faça login</StyledLink>
            </Text>
          </Row>
        </Form>
      </Column>
      <Column>
        <Subtitle>oh! a new friend?</Subtitle>
        <Svg
          src={registerSvg}
          alt="Complete the form and register your account"
        />
        <Background />
      </Column>
    </Container>
  );
};

export default Register;
