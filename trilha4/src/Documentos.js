"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Texto {
    titulo;
    conteudo;
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}
const doc = new Texto("Texto", "Palavras do texto: 'Texto'");
console.log(doc.exibir());
//# sourceMappingURL=Documentos.js.map