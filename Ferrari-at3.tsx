import { Veiculo } from "./Veiculo-at3";
export class Ferrari implements Veiculo{
    ligar(): void {
        console.log("A ferrari esta ligando...")
    }

    desligar(): void {
        console.log("Desligando a ferrari...")
    }

    manobrar(): void {
        console.log("Manobrando o veiculo...")
    }
    engatar(): void {
        console.log("Engatando...")
    }

    acelerar(): void {
        console.log("Acelerando...")
    }

    freiar(): void {
        console.log("Velocidade diminuido")
    }
}