// tim so fibonacci thu n
function fibonacci(n) {
    if (n < 1) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// tinh tong m so fibonacci dau tien
var m = 5;
var sum = 0;
for (var i = 1; i <= m; i++) {
    sum += fibonacci(i);
}
console.log(sum);
