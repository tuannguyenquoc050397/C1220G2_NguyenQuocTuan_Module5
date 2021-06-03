// tim so fibonacci thu n
function fibonacci(n: number): number {
    if (n<1){
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// tinh tong m so fibonacci dau tien
let m: number = 5;
let sum: number = 0;
for (let i: number = 1; i <= m; i++) {
    sum += fibonacci(i);
}
console.log(sum);