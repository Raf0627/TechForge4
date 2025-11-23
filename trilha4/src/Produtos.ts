interface Produtos {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produtos {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

const p1 = new ItemLoja(101, "Iphone X", 2000);
console.log(`Produto Criado: ID=${p1.id}, Nome=${p1.nome}, Preço=R$${p1.preco.toFixed(2)}`);