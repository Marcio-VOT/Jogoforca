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
              ? "#9FAAB5"
              : "#E1ECF4",
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
  border-radius: 3px;
  border: 1px solid;
  width: 40px;
  height: 40px;
  margin-left: 12px;
  margin-top: 11px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #39739d;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin-left: 15%;
`;
