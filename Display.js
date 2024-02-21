class Display {
    constructor(displayValorAnterior, displayValorAtual) {
        this.displayValorAtual = displayValorAtual;
        this.displayValorAnterior = displayValorAnterior;
        this.calcular = new Calculadora();
        this.tipoOperação = undefined;
        this.valorAtual = '';
        this.valorAnterior = '';
        this.signos = {
            somar: '+',
            subtrair: '-',
            multiplicar: 'x',
            dividir: '%'
        }
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

    computar(tipo) {
        this.tipoOperação !== 'igual' && this.conta();
        this.tipoOperação = tipo;
        this.valorAnterior = this.valorAtual || this.valorAnterior;
        this.valorAtual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorAtual.includes('.')) return
        this.valorAtual = this.valorAtual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperação] || ''}`;
    }

    conta() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorAtual = parseFloat(this.valorAtual);

        if (isNaN(valorAtual) || isNaN(valorAnterior)) return
        this.valorAtual = this.calcular[this.tipoOperação](valorAnterior, valorAtual);
    }
}   