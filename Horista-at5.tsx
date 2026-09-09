import { Funcionario } from "./Funcionario-at5";

export class Horista extends Funcionario{

    calcularSalario(): void {
        let salario: number = quantidadeHoras * valorHora;
    }

} 