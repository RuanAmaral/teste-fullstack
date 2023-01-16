import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/pokemon-logo.png';
import { register } from '../../services/api';
import {
  Container,
  FormContainer,
  LogoContainer,
  Logo,
  Content,
  Text,
  Wrapper,
  Success,
  Warning,
  SuccessText,
  AlertText,
  Field,
  Input,
  Button,
  BackLogin,
} from './styles';

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [empty, setEmpty] = useState(false);
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function handleRegister() {
    if (email && name && password && phoneNumber) {
      try {
        register(email, name, password, phoneNumber).then((res) => {
          if (res.resposta) {
            setSuccess(true);
          }
        });
      } catch {
        setFailure(true);
        setTimeout(() => {
          setFailure(false);
        }, 4000);
      }
    } else {
      setEmpty(true);
      setTimeout(() => {
        setEmpty(false);
      }, 4000);
    }
  }

  return (
    <Container>
      <FormContainer>
        <Content>
          <Text>Cadastre-se informando os dados abaixo</Text>
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
          {success ? (
            <Wrapper>
              <Success />
              <SuccessText>
                Usúario criado com sucesso. Volte para tela de Login para se
                autenticar
              </SuccessText>
            </Wrapper>
          ) : null}
          {empty ? (
            <Wrapper>
              <Warning />
              <AlertText>Preencha todos os campos obrigatórios</AlertText>
            </Wrapper>
          ) : null}
          {failure ? (
            <Wrapper>
              <Warning />
              <AlertText>Erro ao autenticar. Tente novamente</AlertText>
            </Wrapper>
          ) : null}
          <Field>
            <Input
              id="email"
              type="text"
              autoComplete="off"
              placeholder="Email*"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </Field>
          <Field>
            <Input
              id="name"
              type="text"
              autoComplete="off"
              placeholder="Nome*"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
          </Field>
          <Field>
            <Input
              id="phoneNumber"
              autoComplete="off"
              type="number"
              placeholder="Telefone*"
              value={phoneNumber}
              onChange={(e: any) => setPhoneNumber(e.target.value)}
            />
          </Field>
          <Field>
            <Input
              autoComplete="off"
              placeholder="Senha*"
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </Field>
          <Button id="button" onClick={handleRegister}>
            Cadastrar
          </Button>
          <BackLogin onClick={() => navigate('/login')}>
            Voltar para Login
          </BackLogin>
        </Content>
      </FormContainer>
    </Container>
  );
}

export { SignUp };
