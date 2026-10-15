import { Funcionario } from "./Funcionario-at5";

export class PessoaJuridica extends Funcionario{

 private valorBruto: number;
    private imposto: number;

    constructor(id: number, nome: string,  telefone: string, matricula: number, endereco: string,
        valorBruto: number,imposto: number
    ) {
        super(id, nome, telefone, matricula, endereco);
        this.valorBruto = valorBruto;
        this.imposto = imposto;
    }

    calcularSalario(): void {
        let salario = this.valorBruto - this.imposto;
        console.log(`O salario Pesssoa é de ${salario} reais.`);
    }
}
