import styled, { css } from "styled-components";

// export const Container = styled.div`
//   background-color: #161616;
//   border-radius: 2px;
//   border-style: none;
//   height: 30px;
//   margin: 5px;

//   ${(props) =>
//     props.prymary &&
//     css`
//       background-color: ##a9a9a9;
//     `}
// `;

export const ButtonComponentStyle = styled.button`
  border: none;
  background-color: #161616;
  color: white;
  height: 29px;
  margin: 2px;
  ${(props) =>
    props.primary &&
    css`
      background-color: #bfb6b6;
      color: black;
    `}
`;
