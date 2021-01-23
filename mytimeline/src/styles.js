import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #c3cfe2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
`;

export const Title = styled.h1`
  text-align: center;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;
`;

export const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin: 10px 0;
  width: 50%;
`;

export const TimelineContent = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: seashell;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  position: relative;
  width: 400px;
  max-width: 70%;
  text-align: center;

  time {
    color: #777;
    font-size: 12px;
    font-weight: bold;
  }

  span {
    background-color: #fff;
    border: 3px solid #e17b77;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: -40px;
    width: 20px;
    height: 20px;
    z-index: 100;
  }
`;
