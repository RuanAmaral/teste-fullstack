import React, { useRef , useState} from "react";


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

import { verifyLogin } from "../../Utils/api"



// function abreCadastra(params) {
  
  // }
  
  function Login() {
    const inputUser = useRef("");
    const inputPassword = useRef("");
    
    const [paginaLogada, setPaginaLogada] = useState(false);
    let paginaCadastro = false;
    
    function loga(email, senha) {
      verifyLogin(email,senha).then(() =>{
        const res = localStorage.getItem("verification")
        if (res) {
          setPaginaLogada(true)
        }
        else{
          alert("login ou senha errados")
        }
      })
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
        <InputBox type="Password" placeholder="Password" ref={inputPassword} values={inputPassword.current.value} />
        </InputContainer>
        <GroupButton>
          <ButtonSoloContainer primary>
            <Buttons function={() =>{loga(inputUser.current.value,inputPassword.current.value)}} name="Logon"></Buttons>
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
