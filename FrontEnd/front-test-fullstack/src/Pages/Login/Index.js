import React, { useRef } from "react";


import {
  ButtonSoloContainer,
  Container,
  GroupButton,
  SubContainer,
  Title,
  InputContainer,
  InputBox
} from "./Style";

import Register from "../Register/Index";
import Buttons from "../../Components/Buttons/Index";

function Login() {
  const inputUser = useRef("");
  const inputPassword = useRef("");
  const paginaLogada = false;
  const paginaCadastro = true;

  const LogonFunction = () =>{
    alert(`clicou e funcionou com ${inputUser.current.value}`)
}

if (paginaLogada) {
    return(<></>)
}else if (paginaCadastro) {
    return(<Register/>)
}

    return (
        <Container>
      <SubContainer>
        <Title>Login</Title>
        <InputContainer>
        <InputBox type="Text" placeholder="User" ref={inputUser} value={inputUser.current.value}/>
        </InputContainer>
        <InputContainer>
        <InputBox type="Password" placeholder="Password" values={inputPassword} />
        </InputContainer>
        <GroupButton>
          <ButtonSoloContainer primary>
            <Buttons function={LogonFunction} name="Logon"></Buttons>
          </ButtonSoloContainer>
          <ButtonSoloContainer>
            <Buttons name="Cadastre-se"></Buttons>
          </ButtonSoloContainer>
        </GroupButton>
      </SubContainer>
    </Container>
  );

}

export default Login;
