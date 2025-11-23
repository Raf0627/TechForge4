"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VoteSystem {
    votes;
    constructor() {
        this.votes = {};
    }
    voteFor(candidate) {
        if (!this.votes[candidate]) {
            this.votes[candidate] = 0;
        }
        this.votes[candidate]++;
    }
}
class Election extends VoteSystem {
    getResults() {
        return this.votes;
    }
}
class Poll extends VoteSystem {
    getResults() {
        const entries = Object.entries(this.votes);
        const list = entries.map(([candidate, count]) => ({
            candidate: candidate,
            votes: count
        }));
        return list.sort((a, b) => b.votes - a.votes);
    }
}
const eleicao = new Election();
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato B");
eleicao.voteFor("Candidato A");
console.log(eleicao.getResults());
const enquete = new Poll();
enquete.voteFor("Opção 1");
enquete.voteFor("Opção 2");
enquete.voteFor("Opção 2");
enquete.voteFor("Opção 3");
enquete.voteFor("Opção 2");
enquete.voteFor("Opção 3");
console.log(enquete.getResults());
//# sourceMappingURL=Votacao.js.map