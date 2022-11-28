import React from "react";
import styled from "styled-components";
import Forca0 from "../assets/forca0.png";
import Forca1 from "../assets/forca1.png";
import Forca2 from "../assets/forca2.png";
import Forca3 from "../assets/forca3.png";
import Forca4 from "../assets/forca4.png";
import Forca5 from "../assets/forca5.png";
import Forca6 from "../assets/forca6.png";
const forca = [Forca0, Forca1, Forca2, Forca3, Forca4, Forca5, Forca6];

export default (props) => {
  let chute = [...props.chuteLetra];
  let controleAcerto = 0;
  const [seguraPalavra, setSeguraPalavra] = React.useState("");
  function definePalavra() {
    props.setControle(false);
    props.setChuteLetra([]);
    let escolha =
      props.palavras[Math.floor(Math.random() * props.palavras.length - 1)];
    setSeguraPalavra(escolha);
    escolha = escolha.split("");
    props.setPalavra([...escolha]);
  }
  function reiniciaJogo() {
    props.setPalavra([]);
    props.setErros([0]);
    props.setChutePalavra("");

    definePalavra();
    controleAcerto = 0;
  }
  const boo = props.erros == 6;
  let corVitoria;
  function CorGanhar() {
    if (!boo && props.controle) {
      props.setControle(true);
      return "#27AE60";
    }
    return corVitoria;
  }

  function letraCerta(a) {
    controleAcerto++;

    if (controleAcerto == props.palavra.length && props.controle == false) {
      props.setChuteLetra([...props.alfabeto]);
      props.setControle(true);
      controleAcerto = 0;
    }
    return a;
  }

  return (
    <JogoStyled>
      <img data-test="game-image" src={forca[props.erros]} />
      <button
        data-test="choose-word"
        onClick={!props.palavra.length ? definePalavra : reiniciaJogo}
      >
        Escolher Palavras
      </button>
      <div>
        <h1
          data-test="word"
          data-answer={seguraPalavra == "" ? "" : seguraPalavra}
          style={{
            color: boo ? "#FF0000" : CorGanhar(),
          }}
        >
          {props.palavra.map((a) => (chute.includes(a) ? letraCerta(a) : ` _`))}
        </h1>
      </div>
    </JogoStyled>
  );
};

const JogoStyled = styled.div`
  height: 466.67px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 89px;
    right: 53px;
    width: 200px;
    height: 60px;
    border-style: none;
    background: #27ae60;
    border-radius: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
  h1 {
    position: absolute;
    bottom: 0px;
    right: 0px;
    margin-right: 80px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 68px;
    color: #000000;
  }
  img {
    margin-top: 59px;
    margin-left: 38px;
  }
`;
