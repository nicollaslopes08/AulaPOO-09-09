import { Calculos } from "./calculos-at6";

export class Calculando implements Calculos {
    private num1: number;
    private num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public somar(): number {
        return this.num1 + this.num2;
    }

    public sub(): number {
        return this.num1 - this.num2;
    }

    public mult(): number {
        return this.num1 * this.num2;
    }

    public div(): number {
        if (this.num2 === 0) {
            console.log("Erro, divisão por zero");
            return 0;
        }
        return Math.floor(this.num1 / this.num2); 
    }

    public exp(): number {
        return this.num1 ** this.num2;
    }
}
