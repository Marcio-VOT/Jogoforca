import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <ContainerChute>
      <div>Já sei a palavra !</div>
      <input></input>
      <button>Chutar</button>
    </ContainerChute>
  );
};
const ContainerChute = styled.div`
  display: flex;
  align-items: center;
  margin-left: 17.5%;
  margin-top: 28px;
  width: 60%;
  justify-content: space-between;
  button {
    background-color: lightblue;
    border: 1px solid #71c8e6;
    width: 80px;
    height: 30px;
  }
  input {
    width: 70%;
    height: 27px;
  }
`;
