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
  let chutePalavra = [...props.chutePalavra];
  let contorleAcerto = 0;
  const [seguraPalavra, setSeguraPalavra] = React.useState("");
  function definePalavra() {
    props.setControle(false);
    props.setChuteLetra([]);
    let escolha =
      props.palavras[Math.floor(Math.random() * props.palavras.length - 1)];
    setSeguraPalavra(escolha);
    alert(seguraPalavra);
    escolha = escolha.split("");
    props.setPalavra([...escolha]);

    console.log(escolha);
  }
  function reiniciaJogo() {
    props.setPalavra([]);
    props.setErros([0]);
    props.setChutePalavra("");

    definePalavra();
    contorleAcerto = 0;
  }
  const boo = props.erros == 6;
  let corVitoria;
  function CorGanhar() {
    if (!boo && props.controle) {
      props.setControle(true);
      alert("a");
      return "green";
    }
    return corVitoria;
  }

  function letraCerta(a) {
    contorleAcerto++;

    if (contorleAcerto == props.palavra.length && props.controle == false) {
      props.setChuteLetra([...props.alfabeto]);
      props.setControle(true);
      contorleAcerto = 0;
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
            color: boo ? "red" : CorGanhar(),
          }}
        >
          {props.palavra.map((a) => (chute.includes(a) ? letraCerta(a) : `_ `))}
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
    text-align: center;
    align-items: center;
    top: 0px;
    right: 0px;
    width: 100px;
    height: 60px;
    border-style: none;
    border-radius: 5px;
    background-color: #29be29;
  }
  h1 {
    position: absolute;
    bottom: 0px;
    right: 0px;
    margin-right: 80px;
  }
`;
