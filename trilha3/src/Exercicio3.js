"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagamento {
    processar() {
        console.log("Processando.");
    }
}
class PagamentoCartao extends Pagamento {
    numeroCartao;
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    validarCartao() {
        const limpo = this.numeroCartao.replace(/\s/g, '');
        return limpo.length === 16 && /^\d+$/.test(limpo);
    }
    processar() {
        if (this.validarCartao()) {
            console.log(`Pagamento com cartão ${this.numeroCartao.slice(-4)} processado com sucesso.`);
        }
        else {
            console.log("Erro: Número de cartão inválido.");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    processar() {
        const codigoBoleto = Math.random().toString(36).substring(2, 12).toUpperCase();
        console.log(`Boleto gerado. Código de barras: ${codigoBoleto}`);
    }
}
function processarTodosPagamentos(pagamentos) {
    console.log("PROCESSOS");
    pagamentos.forEach(p => p.processar());
}
const pagamentosParaProcessar = [
    new PagamentoCartao("1234 5678 9012 3456"),
    new PagamentoBoleto(),
    new PagamentoCartao("9999 0000 123"),
    new PagamentoCartao("1234 AAAA 5678 9012"),
    new PagamentoCartao("4000 0000 0000 0000"),
];
processarTodosPagamentos(pagamentosParaProcessar);
//# sourceMappingURL=Exercicio3.js.map