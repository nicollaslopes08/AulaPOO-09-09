import { Funcionario } from "./Funcionario-at5";

export class PessoaJuridica extends Funcionario {
    private valorBruto: number;
    private imposto: number;

    constructor(
        id: number,
        nome: string,
        telefone: string,
        matricula: string,
        endereco: string,
        valorBruto: number,
        imposto: number
    ) {
        super(id, nome, telefone, matricula, endereco);
        this.valorBruto = valorBruto;
        this.imposto = imposto;
    }

    public calculaSalario(): void {
        let salario: number = this.valorBruto - this.imposto;
        console.log(`Salário Pessoa Jurídica (${this.getNome()}): R$ ${salario}`);
    }
}
