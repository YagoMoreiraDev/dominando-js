var idade = 32;
var gols = 1000;
var pi = 3.14; // ponto flutuante para decimal
var exp = 2e10; // 2 * 10^10 = 20000000000
var exp = 2e-2; // 0.02

//Operadores aritméticos:
/*
    100 + 50 = 150 soma;
    100 - 50;
    100 * 2;
    100 / 10;
    2 ** 4 - exponenciação 2 * 2 * 2 * 2 = 16;
    14 % 5 - resto da divisão resultado 4 -> 14 / 5 = 2 -> 5*2 = 10 -> 14 - 10 = 4 esse é o resto da divisão;
*/

/* 
    -> Subtração de um number com uma string o JS consegue fazer a subtração '100' - 50 = 50;
    -> Não tem como subtrair uma string de outra, por essa razão ele faz a conversão e consegue subtrair;
    -> Multiplicação também faz o mesmo, ele consegue multiplicar o number com uma string;
    -> Divisão também faz o mesmo, consegue diviar string por number, 
    -> Existe resultados NaN (Not a Number) e existe a função isNaN();
*/

//Uma coisa é eu fazer:
let valor1 = '80';
let valor2 = 2;
let valorTotalDivisao = valor1 / valor2;
console.log("Valor da divisão de uma string '80' / 2 o resultado é = "+valorTotalDivisao);

let peso = valor1 + 'kg';
valorTotalDivisao = peso / valor2;
console.log("Como existe letras não vai ocorrer a divisão, trazendo como resultado o = "+valorTotalDivisao);


console.log("==================================================");
//Operadores aritméticos unários:
var incremento = 5
console.log("Utilização do ++ depois do nome da var: ");
console.log(incremento);
console.log(incremento++);
console.log(incremento);
console.log("==================================================");
incremento = 5
console.log("Utilização do ++ antes do nome da var: ");
console.log(incremento);
console.log(++incremento);
console.log(incremento);

// LEMBRAR SEMPRE QUE SOMA CONCATENA -> '28' + 2 = 282 | 2 + '15' = 215;
console.log("==================================================");
let valor = '28';
console.log(valor + 5);
let outroValor = 15;
console.log('10' + outroValor);
let teste = '28' + '10';
console.log(teste);
console.log("==================================================");

