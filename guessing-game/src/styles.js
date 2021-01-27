import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    width: 50%;
    max-width: 750px;
    min-width: 480px;
    margin: 0 auto;
  }
`;

export const Text = styled.div`
  h1 {
    background-color: #b91e1e;
    color: #fff;
    text-align: center;
    width: 724px;
    font-family: none;
    padding: 13px;
  }

  p {
    font-size: 25px;
    text-align: center;
    font-weight: 500;
  }
`;

export const GoButton = styled.button`
  background-color: rgb(0, 225, 0);
  color: #000;
  width: 241px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  font-weight: 600;
  font-family: auto;
`;

export const RestartButton = styled.button`
  background-color: rgb(255, 71, 71);
  color: #000;
  width: 241px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  font-weight: 600;
  font-family: auto;
`;

export const Message = styled.div`
  background-color: #be0407;
  margin-right: 0px;
  margin-top: 13px;
  font-size: 25px;
  text-align: center;
  padding: 5px;
`;

export const Result = styled.div`
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 25px;
`;
