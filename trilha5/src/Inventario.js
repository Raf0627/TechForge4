"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
    items;
    constructor() {
        this.items = {};
    }
    removeItem(item) {
        if (this.items[item]) {
            delete this.items[item];
            console.log(`Item removido: ${item}`);
        }
        else {
            console.log(`Item não encontrado para remoção: ${item}`);
        }
    }
    getInventory() {
        return this.items;
    }
}
class WarehouseInventory extends Inventory {
    addItem(item, quantity) {
        if (!this.items[item]) {
            this.items[item] = 0;
        }
        this.items[item] += quantity;
        console.log(`Armazém: Adicionado ${quantity} un. de ${item}. Total: ${this.items[item]}`);
    }
}
class StoreInventory extends Inventory {
    static MAX_QUANTITY = 10;
    addItem(item, quantity) {
        const currentQty = this.items[item] || 0;
        const newTotal = currentQty + quantity;
        if (newTotal > StoreInventory.MAX_QUANTITY) {
            console.error(`Loja: Erro! Não é possível adicionar ${quantity} de ${item}. Limite excedido (Máx: 10, Atual: ${currentQty}).`);
        }
        else {
            this.items[item] = newTotal;
            console.log(`Loja: Adicionado ${quantity} un. de ${item}. Total: ${this.items[item]}`);
        }
    }
}
const armazem = new WarehouseInventory();
armazem.addItem("Caixas de Papelão", 500);
armazem.addItem("Fita Adesiva", 200);
const loja = new StoreInventory();
loja.addItem("Camiseta", 5);
loja.addItem("Camiseta", 4);
loja.addItem("Camiseta", 2);
console.log("\nInventário Loja Final:", loja.getInventory());
//# sourceMappingURL=Inventario.js.map