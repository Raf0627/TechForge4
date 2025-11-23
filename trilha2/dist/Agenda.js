"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
class Agenda {
    constructor() {
        this.compromissos = [];
    }
    adicionarCompromisso(compromisso) {
        this.compromissos.push(compromisso);
        console.log(`Compromisso adicionado: "${compromisso}"`);
    }
    listarCompromissos() {
        console.log("--- Lista de Compromissos ---");
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso agendado.");
            return;
        }
        this.compromissos.forEach((c, index) => {
            console.log(`${index + 1}. ${c}`);
        });
    }
}
exports.Agenda = Agenda;
