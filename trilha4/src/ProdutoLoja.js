"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    produtos;
    constructor(produtosIniciais = []) {
        this.produtos = produtosIniciais;
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
const produtosLoja = [
    { codigo: 500, nome: "Mouse" },
    { codigo: 501, nome: "Teclado" },
    { codigo: 502, nome: "Webcam" },
];
const minhaLoja = new Loja(produtosLoja);
const produtoEncontrado = minhaLoja.buscarProdutoPorCodigo(501);
console.log(`${produtoEncontrado ? produtoEncontrado.nome : "Produto não encontrado"}`);
const produtoInexistente = minhaLoja.buscarProdutoPorCodigo(600);
console.log(`${produtoInexistente ? produtoInexistente.nome : "Produto não encontrado"}`);
//# sourceMappingURL=ProdutoLoja.js.map