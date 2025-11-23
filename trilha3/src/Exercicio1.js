"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    mover() {
        console.log("O veículo está se movendo");
    }
}
class Carro extends Veiculo {
    mover() {
        console.log("O carro está dirigindo");
    }
}
class Bicicleta extends Veiculo {
    mover() {
        console.log("A bicicleta está pedalando");
    }
}
const meuCarro = new Carro();
const minhaBicicleta = new Bicicleta();
const meuVeiculo = new Veiculo();
meuVeiculo.mover();
meuCarro.mover();
minhaBicicleta.mover();
//# sourceMappingURL=Exercicio1.js.map