export class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorTotalEstoque(): number {
        const valorTotal = this.preco * this.quantidade;
        console.log(`Valor total em estoque de ${this.nome}: R$${valorTotal.toFixed(2)}`);
        return valorTotal;
    }
}