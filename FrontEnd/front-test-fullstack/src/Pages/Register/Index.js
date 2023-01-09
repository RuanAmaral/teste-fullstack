import React from "react";
import Buttons from "../../Components/Buttons/Index";

import {
  Container,
  InputContainer,
  InputBox,
  SubContainer,
  Title,
  GroupButton,
} from "./Style";

const Register = () => {
  return (
    <Container>
      <SubContainer>
        <Title>Cadastro</Title>
        <InputContainer>
          <InputBox placeholder="Nome" />
        </InputContainer>
        <InputContainer>
          <InputBox placeholder="E-mail" />
        </InputContainer>
        <InputContainer>
          <InputBox placeholder="Telefone" />
        </InputContainer>
        <InputContainer>
          <InputBox placeholder="Senha" />
        </InputContainer>
        <GroupButton>
          <Buttons name="Cadastrar"/>
          <Buttons name="CancelarCadastrar" />
        </GroupButton>
      </SubContainer>
    </Container>
  );
};

export default Register;
