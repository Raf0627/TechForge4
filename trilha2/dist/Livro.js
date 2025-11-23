"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }
    marcarComoLido() {
        if (!this.lido) {
            this.lido = true;
            console.log(`O livro "${this.titulo}" foi marcado como lido.`);
        }
        else {
            console.log(`O livro "${this.titulo}" já está marcado como lido.`);
        }
    }
    getStatus() {
        return this.lido ? "Lido" : "Não Lido";
    }
}
exports.Livro = Livro;
