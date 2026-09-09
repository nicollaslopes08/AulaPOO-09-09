export abstract class Funcionario {
    private id: number;
    private nome: string;
    private telefone: string;
    private matricula: string;
    private endereco: string;

    constructor (id: number, nome: string, telefone: string, matricula: string, endereco: string) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.matricula = matricula;
        this.endereco = endereco;
    }
    
}

