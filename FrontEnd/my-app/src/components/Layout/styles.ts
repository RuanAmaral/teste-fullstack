import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.WHITE};
  overflow: hidden;
`;
