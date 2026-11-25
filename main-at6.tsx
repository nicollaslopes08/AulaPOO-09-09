import { Calculando } from "./calculando-at6";

const calc = new Calculando(10, 2);

console.log(`Soma: ${calc.somar()}`);
console.log(`Subtração: ${calc.sub()}`);
console.log(`Multiplicação: ${calc.mult()}`);
console.log(`Divisão: ${calc.div()}`);
console.log(`Exponenciação: ${calc.exp()}`);
