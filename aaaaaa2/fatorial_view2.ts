import caralho from "./fatorial2";

let nro = 3
let resultado = caralho(nro);
if (nro <= 1) {
    console.log(`Fatorial de ${nro} é igual à 1`);
}
else if (nro === 2) {
    console.log(`Fatorial de ${nro} ===> ${nro} * ${nro - 1} = ${resultado}`);
}
else {
console.log(`Fatorial de ${nro} ===> ${nro} * ${nro - 1}! = ${resultado}`);
}