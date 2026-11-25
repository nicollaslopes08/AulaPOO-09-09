import { Funcionario } from "./Funcionario-at5";

export class Jornada extends Funcionario {
    private salarioHora: number;
    private horasTrabalhadas: number;

    constructor(
        id: number,
        nome: string,
        telefone: string,
        matricula: string,
        endereco: string,
        salarioHora: number,
        horasTrabalhadas: number
    ) {
        super(id, nome, telefone, matricula, endereco);
        this.salarioHora = salarioHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    public calculaSalario(): void {
        let salario: number = this.salarioHora * this.horasTrabalhadas;
        console.log(`Salário Jornada (${this.getNome()}): R$ ${salario}`);
    }
}
