interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja[];

    constructor(produtosIniciais: ProdutoLoja[] = []) {
        this.produtos = produtosIniciais;
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const produtosLoja: ProdutoLoja[] = [
    { codigo: 500, nome: "Mouse" },
    { codigo: 501, nome: "Teclado" },
    { codigo: 502, nome: "Webcam" },
];

const minhaLoja = new Loja(produtosLoja);

const produtoEncontrado = minhaLoja.buscarProdutoPorCodigo(501);
console.log(`${produtoEncontrado ? produtoEncontrado.nome : "Produto não encontrado"}`);

const produtoInexistente = minhaLoja.buscarProdutoPorCodigo(600);
console.log(`${produtoInexistente ? produtoInexistente.nome : "Produto não encontrado"}`);