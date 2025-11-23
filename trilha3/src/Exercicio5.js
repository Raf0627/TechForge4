"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nome;
    salario;
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getSalarioBase() {
        return this.salario;
    }
    getNome() {
        return this.nome;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.salario * 0.10;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.salario * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach(func => {
        const bonus = func.calcularBonus();
        const salarioFinal = func.getSalarioBase() + bonus;
        console.log(`${func.constructor.name}: ${func.getNome()}`);
        console.log(`Salário Base: R$${func.getSalarioBase().toFixed(2)}`);
        console.log(`Bônus (${(bonus / func.getSalarioBase() * 100).toFixed(0)}%): R$${bonus.toFixed(2)}`);
        console.log(`Salário Final: R$${salarioFinal.toFixed(2)}`);
        console.log();
    });
}
const equipe = [
    new Gerente("Ana Paula", 8500.00),
    new Operario("Roberto Carlos", 3200.00),
    new Gerente("Felipe Oliveira", 12000.00),
    new Operario("Maria Joana", 2800.00)
];
calcularSalarioComBonus(equipe);
//# sourceMappingURL=Exercicio5.js.map