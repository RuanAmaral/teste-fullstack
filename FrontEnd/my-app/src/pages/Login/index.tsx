import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/pokemon-logo.png';
import { verifyLogin } from '../../services/api';
import {
  Container,
  FormContainer,
  LogoContainer,
  Logo,
  Content,
  Text,
  Wrapper,
  Warning,
  AlertText,
  Field,
  Input,
  Button,
  SignUp,
} from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [empty, setEmpty] = useState(false);
  const [failure, setFailure] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    if (email && password) {
      try {
        verifyLogin(email, password).then(() => {
          localStorage.getItem('verification');
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
          <Text>Conecte-se informando os dados abaixo</Text>
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
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
              autoComplete="off"
              placeholder="Usuário*"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
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
          <Button id="button" onClick={handleLogin}>
            Entrar
          </Button>
          <SignUp onClick={() => navigate('/signup')}>
            Não possui conta? Cadastre-se aqui
          </SignUp>
        </Content>
      </FormContainer>
    </Container>
  );
}

export { Login };
