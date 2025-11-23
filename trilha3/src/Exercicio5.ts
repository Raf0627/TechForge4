abstract class Funcionario {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularBonus(): number;

    getSalarioBase(): number {
        return this.salario;
    }

    getNome(): string {
        return this.nome;
    }
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
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

const equipe: Funcionario[] = [
    new Gerente("Ana Paula", 8500.00),
    new Operario("Roberto Carlos", 3200.00),
    new Gerente("Felipe Oliveira", 12000.00),
    new Operario("Maria Joana", 2800.00)
];

calcularSalarioComBonus(equipe);