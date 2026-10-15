    import { Funcionario } from "./Funcionario-at5";

    export class Jornada extends Funcionario{

        private salarioHora: number;
        private horasTrabalhadas: number;

    constructor( id: number,  nome: string,  telefone: string,  matricula: number,  endereco: string,
            salarioHora: number, horasTrabalhadas: number
        ) {
            super(id, nome, telefone, matricula, endereco);
            this.salarioHora = salarioHora;
            this.horasTrabalhadas = horasTrabalhadas;
        }

        calcularSalario(): void {
            let salario = this.salarioHora * this.horasTrabalhadas;
            console.log(`O salario jornada é de ${salario} reais.`)
        }

    } 
