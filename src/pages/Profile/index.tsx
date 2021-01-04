import React, { useState, BaseSyntheticEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hello from "../../assets/images/Hello.svg";

interface IContainerProps {
  updating?: boolean;
  deleting?: boolean;
}

// STYLES
const Container = styled.main<IContainerProps>`
  min-height: 100vh;
  width: 90vw;
  max-width: 1170px;

  display: ${(props) => {
    return props.updating || props.deleting ? "grid" : "flex";
  }};

  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;

  @media (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    && > div {
      margin-top: 60px;
    }
  }
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

const UpdatingColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DeletingContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-left: 30px;

  @media (max-width: 960px) {
    margin-left: 0;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    && > p {
      text-align: center;
    }

    && > a {
      align-self: center;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  margin-left: 30px;

  @media (max-width: 960px) {
    margin-left: 0;
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

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 8px;

  && > label {
    margin-right: 10px;
  }

  && > button {
    margin-top: 26px;
    height: 44px;
    width: 160px;
  }
`;

const FormUpdateButton = styled.button`
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
  margin-bottom: 10px;
`;

const Warn = styled.p`
  color: var(--red-light);
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-align: left;
  margin-bottom: 40px;
`;

const Profile: React.FC = () => {
  // Storage value
  const email = "example@mail.com";

  // UI controller
  const [updatingUI, setUpdatingUI] = useState(false);
  const [deletingUI, setDeletingUI] = useState(false);

  // Form data
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");

  const controllerUpdatingUI = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setDeletingUI(false);
    return updatingUI ? setUpdatingUI(false) : setUpdatingUI(true);
  };

  const controllerDeletingUI = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setUpdatingUI(false);
    return deletingUI ? setDeletingUI(false) : setDeletingUI(true);
  };

  const handleUpdateUser = (event: FormEvent) => {
    event.preventDefault();

    if (newEmail === "") {
      setNewEmail(email);
    }

    console.log({
      newEmail: newEmail === "" ? email : newEmail,
      newPassword: newPassword === "" ? password : newPassword,
      password,
    });
  };

  const handleDeleteUser = (event: FormEvent) => {
    event.preventDefault();
    console.log({
      delete: true,
    });
  };

  return (
    <Container updating={updatingUI} deleting={deletingUI}>
      <UpdatingColumn>
        <HelloMessage>
          Hi, <Email to="/profile">{email}</Email>
        </HelloMessage>
        <Svg src={Hello} alt={`hello ${email}`} />
        <Info>Account Options</Info>
        <Row>
          <UpdateButton
            to="/profile/update"
            onClick={(event) => controllerUpdatingUI(event)}
          >
            Update
          </UpdateButton>
          <DeleteButton
            to="/profile/delete"
            onClick={(event) => controllerDeletingUI(event)}
          >
            Delete
          </DeleteButton>
        </Row>
      </UpdatingColumn>

      {updatingUI && (
        <UpdatingColumn>
          <Form onSubmit={(event) => handleUpdateUser(event)} method="POST">
            <Label htmlFor="newEmail">
              Novo Email
              <Input
                type="text"
                id="newEmail"
                name="newEmail"
                placeholder={`Atual: ${email}`}
                value={newEmail}
                onChange={(event) => setNewEmail(event.target.value)}
              />
            </Label>
            <Label htmlFor="newPassword">
              Nova Senha
              <Input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Deixe vazio para NAO atualizar a senha"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </Label>
            <FormRow>
              <Label htmlFor="password">
                Informe a senha Atual
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Label>
              <FormUpdateButton onClick={(event) => handleUpdateUser(event)}>
                Update
              </FormUpdateButton>
            </FormRow>
          </Form>
        </UpdatingColumn>
      )}

      {deletingUI && (
        <UpdatingColumn>
          <DeletingContainer>
            <Title>Warning</Title>
            <Text>
              É um adeus mesmo? - Demos nosso melhor por você e mesmo assim
              permanecemos insuficientes? ... espero que seja feliz com ou sem
              nós :(
            </Text>
            <Warn>
              Após esse procedimento a sua conta será excluída definitivamente
              para sempre!
            </Warn>
            <DeleteButton
              to="/profile/delete"
              onClick={(event) => handleDeleteUser(event)}
            >
              Delete
            </DeleteButton>
          </DeletingContainer>
        </UpdatingColumn>
      )}
    </Container>
  );
};

export default Profile;
