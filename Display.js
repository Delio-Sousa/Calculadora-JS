class Display {
    constructor(displayValorAnterior, displayValorAtual){
        this.displayValorAtual = displayValorAtual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.valorAtual = '';
        this.valorAnterior = '';
    }

    agregarNumero(numero){
        this.valorAtual = numero;
        this.imprimirValores(); 
    }

    imprimirValores(){
        this.displayValorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}