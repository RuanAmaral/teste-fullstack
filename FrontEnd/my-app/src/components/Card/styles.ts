import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 0 10px;
  height: 240px;
  max-height: 240px;
  width: 180px;
  max-width: 180px;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.WHITE};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

export const PokemonPicture = styled.img`
  background-color: #c0b3e9;
  height: 140px;
`;

export const MainInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #e7e9eb;
`;

export const PokeIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const MainInfo = styled.p`
  color: #000;
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 3px;
`;

export const SubInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const SubInfo = styled.p`
  color: #000;
  font-size: 12px;
  text-transform: uppercase;
`;
