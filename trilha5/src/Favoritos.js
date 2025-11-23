"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FavoriteManager {
    favorites;
    constructor() {
        this.favorites = [];
    }
    getFavorites() {
        return this.favorites;
    }
}
class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
            this.favorites.sort();
            console.log(`Filme favoritado: ${item}`);
        }
        else {
            console.log(`O filme "${item}" já está nos favoritos.`);
        }
    }
}
class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item) {
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
//# sourceMappingURL=Favoritos.js.map