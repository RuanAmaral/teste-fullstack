import { Outlet } from 'react-router-dom';

import { Container } from './styles';

function Content() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export { Content };
