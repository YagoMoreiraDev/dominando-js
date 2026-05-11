//Trabalhando com Strings:
let nome = "João";
console.log(typeof nome);

if (typeof nome === "string") {
    console.log("O tipo da variável nome é string");
} else {
    console.log("O tipo da variável nome não é string");
}

console.log(nome.length);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.includes("o"));
console.log(nome.startsWith("J"));
console.log(nome.endsWith("o"));
console.log(nome.substring(0, 3));
console.log(nome.slice(0, 3));
console.log(nome.replace("o", "a"));
console.log(nome.split(" "));
console.log(nome.charAt(0));
console.log(nome.charCodeAt(0));

//Template Strings, tem que usar crases ` ` para usar as variáveis dentro da string.
let nomeCompleto = "João da Silva";
let idade = 20;
console.log(`Meu nome é ${nomeCompleto} e eu tenho ${idade} anos`);
let profissao = "Programador";
console.log(`Meu nome é ${nomeCompleto} e eu tenho ${idade} anos e sou ${profissao}`);