export class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    marcarComoLido(): void {
        if (!this.lido) {
            this.lido = true;
            console.log(`O livro "${this.titulo}" foi marcado como lido.`);
        } else {
            console.log(`O livro "${this.titulo}" já está marcado como lido.`);
        }
    }

    getStatus(): string {
        return this.lido ? "Lido" : "Não Lido";
    }
}