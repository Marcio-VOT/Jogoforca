import React from "react";
import styled from "styled-components";

export default (props) => {
  let [segura, setSegura] = React.useState("");
  function recebeChute() {
    if (!props.controle) {
      props.setChutePalavra(segura.split(""));
      if (
        segura.split("").toString() != props.palavra.toString() &&
        segura != ""
      ) {
        props.setErros([6]);
        props.setChuteLetra(props.alfabeto);
      } else if (segura != "") {
        props.setChuteLetra(props.alfabeto);
      }
    }
    setSegura("");
  }
  return (
    <ContainerChute>
      <div>Já sei a palavra !</div>
      <input
        data-test="guess-input"
        value={segura}
        onChange={(event) => setSegura(event.target.value)}
      />
      <button data-test="guess-button" onClick={recebeChute}>
        Chutar
      </button>
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
