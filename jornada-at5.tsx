import { Funcionario } from "./Funcionario-at5";

export class Jornada extends Funcionario{


    calcularSalario(): void {
        let horasTrabalhadas: number = 248,
        salarioHora: number = 100;

        let salario: number = horasTrabalhadas * salarioHora;
    }

} 