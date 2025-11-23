interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private colecao: LivroBiblioteca[];

    constructor(colecaoInicial: LivroBiblioteca[] = []) {
        this.colecao = colecaoInicial;
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.colecao.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        // Usa includes() para permitir busca parcial ou case-insensitive
        return this.colecao.filter(livro => livro.autor.toLowerCase().includes(autor.toLowerCase()));
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        const disponiveis = this.colecao.filter(livro => livro.disponivel);
        
        // Usa sort() com localeCompare() para ordenação alfabética
        return disponiveis.sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const colecaoGestao: LivroBiblioteca[] = [
    { titulo: "Harry Potter", autor: "Sun Tzu", genero: "Aventura", disponivel: true },
    { titulo: "O Senhor dos Anéis", autor: "Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "1984", autor: "George Orwell", genero: "Ficção Científica", disponivel: false },
    { titulo: "Star Wars", autor: "Georgie Lucas", genero: "Ficção Científica", disponivel: true },
    { titulo: "Hobbit", autor: "Tolkien", genero: "Fantasia", disponivel: false },
];
const gestao = new BibliotecaGestao(colecaoGestao);

console.log("Filtrar por Gênero 'Fantasia':");
gestao.filtrarPorGenero("Fantasia").forEach(l => console.log(`- ${l.titulo}`));

console.log("Buscar por Autor 'Tolkien':");
gestao.buscarPorAutor("Tolkien").forEach(l => console.log(`- ${l.titulo}`));

console.log("Livros Disponíveis Ordenados por Título:");
gestao.obterLivrosDisponiveisOrdenados().forEach(l => console.log(`- ${l.titulo} (Disponível: ${l.disponivel})`));