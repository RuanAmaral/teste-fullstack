import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const SubContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #ECE7E7;
padding: 15px;

`

export const InputContainer = styled.div`
width: 150px;
height: 25px;
margin: 1px;
padding: 1px;
border: 5px;
border-color: #3D3D3D;
background-color: #3D3D3D;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;

`;

export const InputBox = styled.input`
width: 90%;
outline: none;
border: none;
background-color: transparent;

`;

export const Title = styled.p`
  font-size: 15px;
  /* font-style: ; */
`;

export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;
`;