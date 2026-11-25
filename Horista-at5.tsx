import { Funcionario } from "./Funcionario-at5";

export class Horista extends Funcionario {
    private valorHora: number;
    private quantidadeHoras: number;

    constructor(
        id: number,
        nome: string,
        telefone: string,
        matricula: string,
        endereco: string,
        valorHora: number,
        quantidadeHoras: number
    ) {
        super(id, nome, telefone, matricula, endereco);
        this.valorHora = valorHora;
        this.quantidadeHoras = quantidadeHoras;
    }

    public calculaSalario(): void {
        let salario: number = this.valorHora * this.quantidadeHoras;
        console.log(`Salário Horista (${this.getNome()}): R$ ${salario}`);
    }
}
