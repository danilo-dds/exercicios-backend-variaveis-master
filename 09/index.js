const n = 6; //número de lados do polígano
const s = (n - 2) * 180; //soma dos ângulos internos

console.log(`A soma dos ângulos internos é ${s}.`);

const ai = s / n; //calcula quanto vale cada um ângulos interno, caso eles sejam todos iguais

console.log(`caso os ângulos sejam todos iguais, cada um vale ${ai}`);