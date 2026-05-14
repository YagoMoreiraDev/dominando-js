const produto = {
    nome: 'TV',
    preco: 3000.0,
}

const objeto = {
    id: 1,
    date: "2026-05-14",
    items: [
        {
            description: "Celular Iphone",
            price: 5500.0,
            quantity: 1
        },
        {
            description: "TV",
            price: 3000.0,
            quantity: 2
        }
    ],
    client: {
        name: "Yago Moreira",
        email: "yago@email.com",
        active: true
    }
}

console.log(objeto.id);
console.log(objeto.date);
console.log(objeto.items[1].description);
console.log(objeto.items[1].price);
console.log(objeto.client.name);

const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

const newObjTxt = objeto;

const convertendoTxtParaJson = JSON.parse(txt);

console.log(convertendoTxtParaJson["due-date"]);
//Notação de colchetes -> obj["nome"] | não uso . como no caso dos demais atributos;

const convertendoJsonParaTxt = JSON.stringify(newObjTxt);

console.log(convertendoJsonParaTxt);