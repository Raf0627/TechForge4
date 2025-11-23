abstract class TaskManager {
    protected tasks: Set<string>;

    constructor() {
        this.tasks = new Set();
    }

    abstract addTask(task: string): void;

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class Project extends TaskManager {
    private projectName: string;

    constructor(projectName: string) {
        super();
        this.projectName = projectName;
    }

    addTask(task: string): void {
        const taskFormatada = `[Projeto: ${this.projectName}] ${task}`;
        
        if (this.tasks.has(taskFormatada)) {
            console.log(`A tarefa "${task}" já existe neste projeto.`);
        } else {
            this.tasks.add(taskFormatada);
            console.log(`Tarefa de projeto adicionada: "${task}"`);
        }
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        const taskFormatada = `[Diária] ${task}`;
        
        if (this.tasks.has(taskFormatada)) {
            console.log(`A tarefa diária "${task}" já foi adicionada.`);
        } else {
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