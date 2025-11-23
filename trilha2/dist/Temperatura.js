"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperatura = void 0;
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    paraFahrenheit() {
        const fahrenheit = (this.valor * 1.8) + 32;
        return fahrenheit;
    }
    paraKelvin() {
        const kelvin = this.valor + 273.15;
        return kelvin;
    }
}
exports.Temperatura = Temperatura;
