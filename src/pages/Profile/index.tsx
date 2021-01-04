import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hello from "../../assets/images/Hello.svg";

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
  overflow: hidden;
`;

const HelloMessage = styled.h1`
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 5.2rem;
  margin: 0;
  margin-bottom: 60px;

  @media (max-width: 580px) {
    font-size: 3.2rem;
    line-height: 5.2rem;
  }
`;

const Svg = styled.img`
  width: 100%;
  max-width: 28rem;
`;

const Info = styled.h1`
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 5.2rem;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 580px) {
    font-size: 3.2rem;
    line-height: 5.2rem;
  }
`;

const Email = styled(Link)`
  font-weight: bold;
  color: #fff;
  transition: 0.3s;

  &&:hover {
    color: var(--purple-light);
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 40rem;

  @media (max-width: 360px) {
    display: flex;
    flex: 1;
    flex-direction: column;

    && > a {
      width: 100vw;
      max-width: auto;
      margin-bottom: 3rem;
    }
  }
`;

const UpdateButton = styled(Link)`
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
    var(--yellow-light) 0%,
    var(--yellow-dark) 58%,
    var(--yellow-dark) 100%
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

const DeleteButton = styled(Link)`
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
    var(--red-light) 0%,
    var(--red-dark) 58%,
    var(--red-dark) 100%
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

const Profile: React.FC = () => {
  const email = "example@mail.com";

  return (
    <Container>
      <HelloMessage>
        Hi, <Email to="/profile">{email}</Email>
      </HelloMessage>
      <Svg src={Hello} alt={`hello ${email}`} />
      <Info>Account Options</Info>
      <Row>
        <UpdateButton to="/profile/update">Update</UpdateButton>
        <DeleteButton to="/profile/delete">Delete</DeleteButton>
      </Row>
    </Container>
  );
};

export default Profile;
