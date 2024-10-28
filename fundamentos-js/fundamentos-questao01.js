const dataAtual = new Date();
const opcoes = { weekday: "long" };
const diaDaSemana = dataAtual.toLocaleDateString("pt-BR", opcoes);
const horaAtual = dataAtual.toLocaleTimeString("pt-BR", { hour12: false });

console.log(`Hoje é: ${diaDaSemana}.`);
console.log(`A hora atual é: ${horaAtual}.`);
