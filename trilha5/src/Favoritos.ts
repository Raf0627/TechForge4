abstract class FavoriteManager {
    protected favorites: string[];

    constructor() {
        this.favorites = [];
    }

    abstract addFavorite(item: string): void;

    getFavorites(): string[] {
        return this.favorites;
    }
}

class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            this.favorites.sort(); 
            console.log(`Filme favoritado: ${item}`);
        } else {
            console.log(`O filme "${item}" já está nos favoritos.`);
        }
    }
}

class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        this.favorites.unshift(item);
        console.log(`Livro favoritado: ${item}`);
    }
}

const filmes = new MoviesFavoriteManager();
filmes.addFavorite("O Poderoso Chefão");
filmes.addFavorite("Matrix");
filmes.addFavorite("Interestelar");
filmes.addFavorite("Matrix");

console.log("Filmes:", filmes.getFavorites());

const livros = new BooksFavoriteManager();
livros.addFavorite("Dom Quixote");
livros.addFavorite("1984");
livros.addFavorite("O Pequeno Príncipe");

console.log("Livros:", livros.getFavorites());