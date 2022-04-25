const p0 = 1000; //a população incial de pessoas infectadas
const x = 4; //quantidade de pessoas paras as quais um paciente infectado pode transmitir
const t = 100; //tempo percorrido

const totalDeInfequitados = p0 * x ** (t / 7)

console.log(`Ao final de ${t} dia serão ${totalDeInfequitados} de pessoas infectadas`)
