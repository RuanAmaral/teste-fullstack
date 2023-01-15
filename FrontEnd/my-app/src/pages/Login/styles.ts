import { shade } from 'polished';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import styled from 'styled-components';

import pokebola from '../../assets/pokebola.jpeg';

export const Container = styled.div`
  display: flex;
  height: 100%;
  background: linear-gradient(rgba(31, 33, 36, 0.95), rgba(31, 33, 36, 0.95)),
    url(${pokebola}) no-repeat;
  background-size: cover;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.GENERAL.PRIMARY};
  box-shadow: rgba(0, 0, 0, 0.6) 0px 3px 6px;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 27%;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 25px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  height: 80px;
`;

export const Logo = styled.img`
  height: 70px;
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.palette.TEXT.GREY};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Warning = styled(HiOutlineExclamationCircle).attrs((props) => ({
  ...props,
  size: 16,
  color: props.theme.palette.GENERAL.TERTIARY,
}))`
  margin-right: 7px;
`;

export const AlertText = styled.p`
  color: ${({ theme }) => theme.palette.GENERAL.TERTIARY};
  font-family: 'Roboto Light', sans-serif;
  font-size: 11px;
`;

export const Field = styled.div`
  display: flex;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.WHITE};
  border-radius: 3px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  border: 0;
  margin-left: 15px;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.WHITE};
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.BACKGROUND.BLACK};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.GENERAL.SECONDARY};
  color: ${({ theme }) => theme.palette.BACKGROUND.WHITE};
  height: 40px;
  border-radius: 5px;
  border: 0;
  padding: 0 14px;
  outline: none;
  width: 100%;
  margin-bottom: 25px;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${(props) => shade(0.2, props.theme.palette.GENERAL.SECONDARY)};
  }
`;

export const SignUp = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  color: ${({ theme }) => theme.palette.TEXT.GREY};
  &:hover {
    color: ${({ theme }) => theme.palette.TEXT.CLEAR_GREY};
  }
`;
