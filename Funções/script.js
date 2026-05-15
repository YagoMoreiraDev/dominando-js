function areaQuadrado(valor) {
    return valor * valor;
}

areaQuadrado(4); // = 16
areaQuadrado(5); // = 25
areaQuadrado(2); // = 4

function pi() {
    return 3.14;
}

let total = 5 * pi();
console.log(total);
console.log(total.toFixed(2));
console.log(total.toFixed(4));

console.log("Sem executar a função eu chamo nome dela SEM os '( )' "+pi);
console.log("Executando a função eu chamo nome dela COM os '( )' "+pi());
            //parametros  
function imc(peso, altura) { // -> peso e altura são os parâmetros
    var imc = peso / (altura ** 2); 
    return imc;
}
    //argumentos 
imc(92, 1.75); // -> os valores passados para peso e altura são os argumentos
console.log(imc(92, 1.75).toFixed(2));

/*
-> Parâmetro variável da função, é a variável que eu passo quando crio a função, entre os parenteses da função.

-> Argumento é valor que passo para os Parâmetros da função, é quando eu vou executar a função e passo os valores na execução da função, quando to chamando a função. 
*/

function imc2(peso, altura) {
    var total = peso / (altura ** 2);
    console.log(total) // aqui não vai exibir o undefined
}

imc2(65, 1.60);
console.log(imc2(65, 1.60)); // -> aqui o resultado vai exibir no console o undefined;

addEventListener('click', function() {
    console.log('Clicou...');
});

console.log("==========================================================================================")
console.log("Exercicios:")
console.log("==========================================================================================")

// Crie uma função para verificar se um valor é Truthy

function isTruthy(valor) {
    return !!valor;
}
console.log(isTruthy(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(valor) {
    return valor * 4;
}
console.log(perimetroQuadrado(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par
function verificaSeEPar(valor) {
    if(valor % 2 === 0) {
        return "O valor informado É par";
    } else {
        return "O valor informado NÃO é par";
    }
}
console.log(verificaSeEPar(16));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function usandoTypeOf(dado) {
    return typeof(dado);
}
console.log(usandoTypeOf("Teste"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

let dobro = num => num * 2;
console.log(dobro(5));
console.log(dobro(10));

const nome = "Qualquer Coisa";
const minusculo = nome.toLowerCase();
console.log(minusculo);
const maiusculo = nome.toUpperCase();
console.log(maiusculo);

const testeString = (dado) => {
    if(typeof(dado) === 'string') {
        console.log(dado.toLowerCase());
    } else {
        console.log("Números e caracteres não podem sofrer alterações com Minusculo ou Maiusculo...");
    }
}

let dados;
dados = 'carro';
dados.toUpperCase;
testeString("Yago");

console.log(10);
console.log(String(10))
console.log("Moreira")
console.log(String("Moreira"))

const triplo = valor => {
    return valor * 3
};

const aplicar = (f, valor) => {
    const resultado = f(valor);
    console.log(resultado);
}

aplicar(triplo, 3);

const alterarParaLowerCase = (f, dado) => {
    const result = f(dado.toLowerCase());
    return result;
}

alterarParaLowerCase(testeString, "Café")

//Mais exemplos de função dentro de função
const square = (valor) => {
    return valor * valor;
}
console.log(square(5));

//Eu quero saber a soma de dois valores de resultados de uma raiz quadrada;
const somaFinal = (a, b) => {
    let valor1 = square(a);
    let valor2 = square(b);

    return valor1 + valor2;
}
console.log(somaFinal(10, 4));

//Exercício 2 — Verificar idade
function verificarIdade(idade) {
    if(idade >= 18) {
        console.log("Maior de idade...");
    } else {
        console.log("Menor de idade...");
    }
}
console.log(verificarIdade(17));

//Exercício 3 — Texto maiúsculo
function tornarMaiusculo(dado) {
    if(typeof dado === "string") {
        return dado.toUpperCase();
    } else {
        return "Valor invalido";
    }
}
console.log(tornarMaiusculo(1));

//Exercício 4 — Número par
const truthyOrFalse = (num) => {
    return num % 2 === 0 ? true : false;
}
console.log(truthyOrFalse(1156));

//Funções chamando funções
const dobro2 = (valor) => {
    return valor * 2;
}

const triploDoDbro = (valor) => {
    let resultDoDobro = dobro2(valor);
    return resultDoDobro * 3;
}
console.log(triploDoDbro(2));

function gerarNome(nome) {
    return nome;
}

function mostrarSaudacao(nome) {
    return "Olá " + gerarNome(nome);
}
console.log(mostrarSaudacao("Yago Moreira"));