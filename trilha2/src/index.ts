import { ContaBancaria } from './ContaBancaria';
import { Livro } from './Livro';
import { Produto } from './Produto';
import { Temperatura } from './Temperatura';
import { Agenda } from './Agenda';

console.log("CONTA BANCÁRIA");
const minhaConta = new ContaBancaria("João Pedro", 100);
minhaConta.depositar(50.75);
minhaConta.sacar(20);
minhaConta.sacar(150);
console.log(`Saldo final: R$${minhaConta.getSaldo().toFixed(2)}`);

console.log();
console.log("LIVRO");
const harryp = new Livro("Harry Potter", "JK Rowlling", 310);
console.log(`Status de "${harryp.titulo}": ${harryp.getStatus()}`);
harryp.marcarComoLido();
console.log(`Status de "${harryp.titulo}": ${harryp.getStatus()}`);

console.log();
console.log("PRODUTO");
const monitor = new Produto("Monitor", 999.50, 5);
monitor.calcularValorTotalEstoque();

console.log();
console.log("TEMPERATURA");
const tempCelsius = new Temperatura(25);
console.log(`Temperatura em Celsius: ${tempCelsius.valor}°C`);
console.log(`Temperatura em Fahrenheit: ${tempCelsius.paraFahrenheit().toFixed(2)}°F`);
console.log(`Temperatura em Kelvin: ${tempCelsius.paraKelvin().toFixed(2)}K`);

console.log();
console.log("AGENDA");
const agendaDoDia = new Agenda();
agendaDoDia.adicionarCompromisso("Reunião às 10h");
agendaDoDia.adicionarCompromisso("Almoço às 13h");
agendaDoDia.adicionarCompromisso("Fazer exercício às 18h");
agendaDoDia.listarCompromissos();