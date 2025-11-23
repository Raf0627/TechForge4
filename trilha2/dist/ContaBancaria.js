"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
        }
        else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }
    sacar(valor) {
        if (valor > 0) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
                console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
            }
            else {
                console.log("Saldo insuficiente para o saque.");
            }
        }
        else {
            console.log("O valor do saque deve ser positivo.");
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
exports.ContaBancaria = ContaBancaria;
