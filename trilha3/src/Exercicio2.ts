abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura, index) => {
        const nomeFigura = figura.constructor.name;
        console.log(`Área da Figura ${index + 1} (${nomeFigura}): ${figura.calcularArea().toFixed(2)}`);
    });
}

const formas: FiguraGeometrica[] = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 8),
    new Circulo(2.5)
];

imprimirAreas(formas);