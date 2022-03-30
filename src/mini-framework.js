const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`${titulo} aprovado`);
  } else {
    console.error(`${titulo} reprovado`);
  }
};

const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;
const calculaDesconto = (salario, descontos) => salario - descontos;

teste('somaHorasExtras', 10, somaHorasExtras(10, 5));
teste('calculaDesconto', 5, calculaDesconto(10, 5));
