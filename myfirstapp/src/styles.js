import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
 
  }
  `;

export const Title = styled.h1`
  text-align: center;
`;

export const Item = styled.h4`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const ShopImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
  height: 700px;
`;

export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Product = styled.div`
  margin: 20px;

  img {
    width: 350px;
   hight=350px;

  }

  p {
    text-align: center;
   `;
