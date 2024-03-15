function fatorial2(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial2(n - 1);
    }
}
 
export default fatorial2