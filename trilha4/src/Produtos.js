"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemLoja {
    id;
    nome;
    preco;
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}
const p1 = new ItemLoja(101, "Iphone X", 2000);
console.log(`Produto Criado: ID=${p1.id}, Nome=${p1.nome}, Preço=R$${p1.preco.toFixed(2)}`);
//# sourceMappingURL=Produtos.js.map