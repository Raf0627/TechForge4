export class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number):void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    sacar(valor: number):void {
        if (valor > 0) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
                console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
            } else {
                console.log("Saldo insuficiente para o saque.");
            }
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }

    getSaldo():number {
        return this.saldo;
    }
}