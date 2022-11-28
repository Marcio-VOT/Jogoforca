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
        disabled={props.controle === false ? false : true}
        data-test="guess-input"
        value={segura}
        onChange={(event) => setSegura(event.target.value.toLowerCase())}
      />
      <button
        disabled={props.controle === false ? false : true}
        data-test="guess-button"
        onClick={recebeChute}
      >
        Chutar
      </button>
    </ContainerChute>
  );
};
const ContainerChute = styled.div`
  display: flex;
  align-items: center;
  margin-left: 17.5%;
  margin-top: 56px;
  width: 60%;
  justify-content: space-between;
  button {
    background: #e1ecf4;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
    width: 100px;
    height: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  input {
    width: 55%;
    height: 40px;
    background: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
  }
  div {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }
`;
