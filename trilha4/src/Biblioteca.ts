interface Livros {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livros[];

    constructor(livrosIniciais: Livros[] = []) {
        this.livros = livrosIniciais;
    }

    buscarLivrosDisponiveis(): Livros[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const livrosBiblioteca: Livros[] = [
    { titulo: "Harry Potter", autor: "JK Rowlling", disponivel: false },
    { titulo: "Diário de um Banana", autor: "Gregory Hefley", disponivel: true },
    { titulo: "Hobbit", autor: "Tolkien", disponivel: true },
    { titulo: "Perguntas ao Max", autor: "Max", disponivel: false },
];

const bibliotecaSimples = new Biblioteca(livrosBiblioteca);

const disponiveis = bibliotecaSimples.buscarLivrosDisponiveis();
console.log("Livros Disponíveis:");
disponiveis.forEach(l => console.log(`- ${l.titulo} (Autor: ${l.autor})`));