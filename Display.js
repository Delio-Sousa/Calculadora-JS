class Display {
    constructor(displayValorAnterior, displayValorAtual) {
        this.displayValorAtual = displayValorAtual;
        this.displayValorAnterior = displayValorAnterior;
        this.calcular = new Calculadora();
        this.tipoOperação = undefined;
        this.valorAtual = '';
        this.valorAnterior = '';
    }

    excluir() {
        this.valorAtual = this.valorAtual.toString().slice(0, -1)
        this.imprimirValores();
    }

    excluirTudo() {
        this.valorAtual = '';
        this.valorAnterior = '';
        this.tipoOperação = undefined;
        this.imprimirValores();
    }

    

    agregarNumero(numero) {
        if (numero === '.' && this.valorAtual.includes('.')) return
        this.valorAtual = this.valorAtual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}