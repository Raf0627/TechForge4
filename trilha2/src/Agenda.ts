export class Agenda {
    compromissos: string[] = [];

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
        console.log(`Compromisso adicionado: "${compromisso}"`);
    }

    listarCompromissos(): void {
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