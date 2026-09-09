import { Funcionario } from "./Funcionario-at5";

export class PessoaJuridica extends Funcionario{

    calcularSalario(): void {
        let salario: number = valorBruto - imposto;
    }

} 