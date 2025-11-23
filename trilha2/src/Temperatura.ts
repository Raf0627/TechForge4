export class Temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    paraFahrenheit(): number {
        const fahrenheit = (this.valor * 1.8) + 32;
        return fahrenheit;
    }

    paraKelvin(): number {
        const kelvin = this.valor + 273.15;
        return kelvin;
    }
}