"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    energia;
    constructor(energiaInicial = 50) {
        this.energia = energiaInicial;
    }
    comer(quantidade) {
        this.energia += quantidade;
        console.log(`O animal comeu e a energia subiu para ${this.energia}.`);
    }
    statusEnergia() {
        console.log(`Energia atual (${this.constructor.name}): ${this.energia}`);
    }
}
class Leao extends Animal {
    constructor() {
        super(70);
    }
    comer() {
        this.energia -= 15;
        if (this.energia <= 0) {
            console.log("Leão muito fraco para caçar!");
            this.energia = 0;
            return;
        }
        this.energia += 30;
        console.log(`Leão comeu e a energia subiu para ${this.energia}.`);
    }
}
class Passaro extends Animal {
    constructor() {
        super(30);
    }
    comer() {
        this.energia += 5;
        console.log(`Pássaro comeu e a energia subiu para ${this.energia}.`);
    }
}
const lion = new Leao();
const bird = new Passaro();
lion.statusEnergia();
bird.statusEnergia();
lion.comer();
bird.comer();
lion.statusEnergia();
bird.statusEnergia();
//# sourceMappingURL=Exercicio4.js.map