import { strictEqual } from 'assert';

const verifiqueQue = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      return strictEqual(valor, esperado);
    },

  };
  return assercoes;
};

const teste = (titulo, funcaoTeste) => {
  try {
    funcaoTeste();
    console.log(`${titulo} passou`);
  } catch (err) {
    console.log(`${titulo} deu ruim...`, err);
  }
};

const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;
const calculaDesconto = (salario, descontos) => salario - descontos;

teste('somarHorasExtras', () => {
  const esperado = 10;
  const retornado = somaHorasExtras(5, 4);
  verifiqueQue(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDesconto', () => {
  const esperado = 5;
  const retornado = calculaDesconto(10, 5);
  verifiqueQue(retornado).ehExatamenteIgualA(esperado);
});
