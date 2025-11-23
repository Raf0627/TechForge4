"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularValorTotalEstoque() {
        const valorTotal = this.preco * this.quantidade;
        console.log(`Valor total em estoque de ${this.nome}: R$${valorTotal.toFixed(2)}`);
        return valorTotal;
    }
}
exports.Produto = Produto;
