"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    raio;
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}
class Quadrado extends FiguraGeometrica {
    lado;
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    base;
    altura;
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach((figura, index) => {
        const nomeFigura = figura.constructor.name;
        console.log(`Área da Figura ${index + 1} (${nomeFigura}): ${figura.calcularArea().toFixed(2)}`);
    });
}
const formas = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 8),
    new Circulo(2.5)
];
imprimirAreas(formas);
//# sourceMappingURL=Exercicio2.js.map