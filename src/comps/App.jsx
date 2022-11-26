import React from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import GlobalStyle from "../GlobalStyle";

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

  return (
    <>
      <GlobalStyle />

      <Jogo
        palavras={palavras}
        palavra={palavra}
        setPalavra={setPalavra}
        erros={erros}
        chuteLetra={chuteLetra}
        setChuteLetra={setChuteLetra}
        chutePalavra={chutePalavra}
      />
      <Letras
        alfabeto={alfabeto}
        chuteLetra={chuteLetra}
        setChuteLetra={setChuteLetra}
        palavra={palavra}
        erros={erros}
        setErros={setErros}
      />
      <Chute chutePalavra={chutePalavra} setChutePalavra={setChutePalavra} />
    </>
  );
};
