import React from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";

export default () => {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [palavra, setPalavra] = React.useState([]);
  const [erros, setErros] = React.useState([0]);
  const [chuteLetra, setChuteLetra] = React.useState(alfabeto);
  const [chutePalavra, setChutePalavra] = React.useState("");
  const [controle, setControle] = React.useState(true);

  return (
    <>
      <GlobalStyle />

      <Jogo
        alfabeto={alfabeto}
        palavras={palavras}
        palavra={palavra}
        setPalavra={setPalavra}
        erros={erros}
        chuteLetra={chuteLetra}
        setChuteLetra={setChuteLetra}
        chutePalavra={chutePalavra}
        controle={controle}
        setControle={setControle}
        setChutePalavra={setChutePalavra}
        setErros={setErros}
      />
      <Espaço>
        <Letras
          controle={controle}
          alfabeto={alfabeto}
          chuteLetra={chuteLetra}
          setChuteLetra={setChuteLetra}
          palavra={palavra}
          erros={erros}
          setErros={setErros}
          chutePalavra={chutePalavra}
        />
        <Chute
          chutePalavra={chutePalavra}
          setChutePalavra={setChutePalavra}
          setErros={setErros}
          palavra={palavra}
          alfabeto={alfabeto}
          setChuteLetra={setChuteLetra}
          controle={controle}
          setControle={setControle}
        />
      </Espaço>
    </>
  );
};
const Espaço = styled.div`
  margin-top: 70px;
`;
