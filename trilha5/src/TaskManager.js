"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskManager {
    tasks;
    constructor() {
        this.tasks = new Set();
    }
    listTasks() {
        return Array.from(this.tasks);
    }
}
class Project extends TaskManager {
    projectName;
    constructor(projectName) {
        super();
        this.projectName = projectName;
    }
    addTask(task) {
        const taskFormatada = `[Projeto: ${this.projectName}] ${task}`;
        if (this.tasks.has(taskFormatada)) {
            console.log(`A tarefa "${task}" já existe neste projeto.`);
        }
        else {
            this.tasks.add(taskFormatada);
            console.log(`Tarefa de projeto adicionada: "${task}"`);
        }
    }
}
class DailyTasks extends TaskManager {
    addTask(task) {
        const taskFormatada = `[Diária] ${task}`;
        if (this.tasks.has(taskFormatada)) {
            console.log(`A tarefa diária "${task}" já foi adicionada.`);
        }
        else {
            this.tasks.add(taskFormatada);
            console.log(`Tarefa diária adicionada: "${task}"`);
        }
    }
}
const projeto = new Project("Ecommerce");
projeto.addTask("Desenhar Home");
projeto.addTask("Desenhar Home");
projeto.addTask("Integrar metabase");
const rotina = new DailyTasks();
rotina.addTask("Verificar usuários");
rotina.addTask("Verificar E-mails");
rotina.addTask("Verificar usuários");
console.log("Listagem Projeto:");
console.log(projeto.listTasks());
console.log("Listagem Diária:");
console.log(rotina.listTasks());
//# sourceMappingURL=TaskManager.js.map