//o getElementById procura e retorna o elemento uma referencia para o id que no caso é valor-anterior e atual no thml
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorAtual = document.getElementById('valor-atual');
// o querySelectorAll procura todos os elementos da classe css " " e retorna uma lista 
const botãoNumeros = document.querySelectorAll('.numero');
const botãoOperador = document.querySelectorAll('.operador');

// O elemento new cria uma istância do objeto de uma função construtoras 
//Nesse caso Display recebe por parametro (displayValorAnterior, displayValorAtual)
const display = new Display(displayValorAnterior, displayValorAtual);

//A função forEach ira iterar sobre cada elemento da lista botãoNumeros
//addEventListener ira criar um evento 'click' quando o botão for clicado a função de retorno é executada 'agrgarNumero'
//agregarNumero é o valor do texto dentro do botão 
botãoNumeros.forEach(botão => {
    botão.addEventListener('click', () => display.agregarNumero(botão.innerHTML));
});
