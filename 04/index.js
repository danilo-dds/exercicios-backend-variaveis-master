const capitalInicial = 1000; //capital(valor inicial dde uma divida, empréstimo ou investimento)
const taxa = 0.125; //taxa fixa de juros
const tempo = 5; //periodo de tempo
const montante = capitalInicial * (1 + taxa) ** tempo //o capital acrescido dos juros, ou seja, Capital + Juros

console.log(`O valor a ser pago no fim do empréstimo é ${montante}`);
