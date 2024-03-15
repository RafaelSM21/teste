class Fibonacci {
    n1:number;
    cache: any;
    constructor(n1:number){
        this.n1 = n1;
        this.cache = {};
    }
    sequencia(nro: number): number {
        if (nro <= 1) {
          return nro;
        }
        else {
          return this.sequencia(nro - 1) + this.sequencia(nro - 2);
        }
    }
    sequencia_c(nro:number):number{
        if(this.cache[nro]!= undefined) {
            return this.cache[nro];
        }
        else {
            if (nro <= 1) {
                this.cache[nro] = this.n1;
                return this.n1;
            }
            else {
                this.cache[nro] = this.sequencia(nro - 1) + this.sequencia(nro - 2); 
                return this.cache[nro];
            }              

        }
    }
}

export {Fibonacci}