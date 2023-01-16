// @ts-nocheck
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../../assets/pokeball.png';
import {
  Container,
  LeftContent,
  Logo,
  Title,
  RightContent,
  RightContentInfo,
  Wrapper,
  Avatar,
  Initials,
  Touchable,
  Logout,
  Tooltip,
} from './styles';

function Header() {
  const [initialsName, setInitialsName] = useState('');
  const userData = JSON.parse(localStorage.getItem('userData'));
  const username = userData.nome;
  const { email } = userData;
  const navigate = useNavigate();

  const handleInitials = () => {
    const parts = username?.split(' ');
    let initials = '';
    for (let i = 0; i < 2; i++) {
      if (parts[i]?.length > 0 && parts[i] !== '') {
        initials += parts[i][0];
      }
    }
    setInitialsName(initials.toUpperCase());
  };

  useEffect(() => {
    handleInitials();
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
  };

  return (
    <Container>
      <LeftContent>
        <Logo src={logo} />
        <Title>Pokédex do Ruan</Title>
      </LeftContent>
      <RightContent>
        <Wrapper>
          <RightContentInfo>{username}</RightContentInfo>
          <RightContentInfo>{email}</RightContentInfo>
        </Wrapper>
        <Avatar>
          <Initials>{initialsName || null}</Initials>
        </Avatar>
        <Touchable onClick={handleLogout}>
          <Tooltip>
            <Logout />
            <span className="tooltiptext">Sair</span>
          </Tooltip>
        </Touchable>
      </RightContent>
    </Container>
  );
}

export { Header };
