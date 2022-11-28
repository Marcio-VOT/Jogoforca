import React from "react";
import styled from "styled-components";

export default (props) => {
  let erro = [];
  function adicionaLetra(a) {
    let array = [...props.chuteLetra];

    if (!array.includes(a)) {
      array = [...props.chuteLetra, a];
      if (!props.palavra.includes(a)) {
        erro = [...props.erros];
        erro[0]++;
        props.setErros([...erro]);
      }
    }

    props.setChuteLetra(array);
    if (erro[0] == 6) {
      props.setChuteLetra(props.alfabeto);
    }
  }
  return (
    <Container>
      {props.alfabeto.map((a) => (
        <Letra
          disabled={
            props.controle === false
              ? props.chuteLetra.includes(a) === true
                ? true
                : null
              : true
          }
          data-test="letter"
          onClick={() => adicionaLetra(a)}
          style={{
            backgroundColor: props.chuteLetra.includes(a)
              ? "gray"
              : "lightgray",
          }}
          key={a}
        >
          {a.toUpperCase()}
        </Letra>
      ))}
    </Container>
  );
};

const Letra = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-color: gray;
  border: 1px solid;
  width: 50px;
  height: 50px;
  margin-left: 7px;
  margin-top: 7px;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
  margin-left: 15%;
`;
