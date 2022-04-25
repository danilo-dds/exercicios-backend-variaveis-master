const preçoDoTenis = 12999;
const meuDinheiro = 8000;

const desconto = preçoDoTenis - meuDinheiro;
const cupom = 100 * desconto / preçoDoTenis;

console.log(`O valor do cupom de ve ser de ${cupom}%.`)
