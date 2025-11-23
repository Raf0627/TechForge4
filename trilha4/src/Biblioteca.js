"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Biblioteca {
    livros;
    constructor(livrosIniciais = []) {
        this.livros = livrosIniciais;
    }
    buscarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
}
const livrosBiblioteca = [
    { titulo: "Harry Potter", autor: "JK Rowlling", disponivel: false },
    { titulo: "Diário de um Banana", autor: "Gregory Hefley", disponivel: true },
    { titulo: "Hobbit", autor: "Tolkien", disponivel: true },
    { titulo: "Perguntas ao Max", autor: "Max", disponivel: false },
];
const bibliotecaSimples = new Biblioteca(livrosBiblioteca);
const disponiveis = bibliotecaSimples.buscarLivrosDisponiveis();
console.log("Livros Disponíveis:");
disponiveis.forEach(l => console.log(`- ${l.titulo} (Autor: ${l.autor})`));
//# sourceMappingURL=Biblioteca.js.map