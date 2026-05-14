const pessoa = {
    nome: "Yago",
    idade: 32,
    profissao: 'Programador',
    formado: true,
}

console.log(pessoa.nome);

console.log("=================================================================");
const quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}