import { Fibonacci } from "./index";

const n1 = 5;
const f = new Fibonacci(n1);
const termo:number = f.sequencia(n1);
console.log(`O ${n1}º termo da sequencia de Fibonaci é: ${termo}`);
const inicio:number = Date.now();
for(let i:number=1; i<1000000; ++i){
    f.sequencia(n1);
    //f.sequencia_c(n1);
}
const fim:number = Date.now();
console.log("Tempo decorrido: ", (fim - inicio)/1000);