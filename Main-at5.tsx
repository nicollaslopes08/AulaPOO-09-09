import { Jornada } from "./Jornada";
import { Horista } from "./horista";
import { PessoaJuridica } from "./PessoaJuridica";

const jornada1 = new Jornada(1, "Nicollas", "15-992654882", 88, "General Carneiro", 1000, 500)
const horista1 = new Horista(2, "André", "15-9340328839", 89, "Capao Bonito", 400, 500)
const pessoaJuridica1 = new PessoaJuridica(3, "Erica", "15-9128473045", 90, "Capao Bonito", 459, 500)

jornada1.calcularSalario();
horista1.calcularSalario();
pessoaJuridica1.calcularSalario();
