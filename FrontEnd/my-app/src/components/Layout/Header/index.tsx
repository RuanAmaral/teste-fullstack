import { useState, useEffect } from 'react';

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
} from './styles';

function Header() {
  const [initialsName, setInitialsName] = useState('');
  const username = 'Ruan Amaral';

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

  return (
    <Container>
      <LeftContent>
        <Logo src={logo} />
        <Title>Pokédex do Ruan</Title>
      </LeftContent>
      <RightContent>
        <Wrapper>
          <RightContentInfo>Ruan Amaral</RightContentInfo>
          <RightContentInfo>ruan.amaral@gmail.com</RightContentInfo>
        </Wrapper>
        <Avatar>
          <Initials>{initialsName || null}</Initials>
        </Avatar>
      </RightContent>
    </Container>
  );
}

export { Header };
