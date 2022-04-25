const capital = 60000;
const montante = 90000;
const tempoEmMeses = 24;

const taxaDeJuros = (montante / capital) ** (1 / tempoEmMeses) - 1;

console.log(`A taxa de juros do finaciamento foi ${taxaDeJuros * 100}%.`);
