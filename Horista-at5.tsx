import { Funcionario } from "./Funcionario-at5";

export class Horista extends Funcionario{

    private valorHora: number;
    private quantidadeHoras: number;

    constructor(id: number, nome: string, telefone: string, matricula: number, endereco: string,
        valorHora: number, quantidadeHoras: number
    ) {
        super(id, nome, telefone, matricula, endereco);
        this.valorHora = valorHora;
        this.quantidadeHoras = quantidadeHoras;
    }

    calcularSalario(): void {
        let salario = this.valorHora * this.quantidadeHoras;
        console.log(`O salario Horista é de ${salario}`)
    }

        }  
