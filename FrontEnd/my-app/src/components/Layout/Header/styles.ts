import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  background: ${({ theme }) => theme.palette.GENERAL.TERTIARY};
  z-index: 31;
  border-bottom: 5px solid ${({ theme }) => theme.palette.BACKGROUND.BLACK};
  @media (max-width: 460px) {
    header {
      position: fixed;
      top: 0;
      padding: 0 10px;
      i {
        display: block;
        font-size: 18px;
        color: ${({ theme }) => theme.palette.GENERAL.SECONDARY};
      }
    }
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 54px;
  padding: 0 20px;
`;

export const RightContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
`;

export const RightContentInfo = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.TEXT.CONTRAST_TWO};
  font-size: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  background-color: transparent;
  margin: 0 15px;
`;

export const Touchable = styled.button`
  display: flex;
  padding: 0;
  border: 0;
  outline: none;
  width: 100px;
  margin: 0 2px;
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.TEXT.CONTRAST_TWO};
  &:hover {
    color: ${(props) => props.theme.palette.TEXT.CONTRAST_TWO};
    padding: 10px 10px;
    border-radius: 5px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.palette.TEXT.CONTRAST_TWO};
  font-size: 16px;
  margin-left: 10px;
  font-weight: bold;
`;

export const Logo = styled.img`
  height: 26px;
  transform: rotate(30deg);
`;

export const Avatar = styled.button`
  margin-right: 5px;
  border: 1px solid ${(props) => props.theme.palette.BACKGROUND.BLACK};
  outline: none;
  align-self: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.palette.BACKGROUND.WHITE};
  cursor: pointer;
`;

export const Initials = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: ${(props) => props.theme.palette.GENERAL.TERTIARY};
`;
