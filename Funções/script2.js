const deixarMaiusculo = (nome, f) => {
    f(nome);
};

deixarMaiusculo("Yago", (nome) => {
    console.log(nome.toUpperCase());
});

const criarMultiplicador = (numero) => {

    console.log(numero);

    return (valor) => {

        console.log(valor);

        return valor * numero;
        
    };
};

