// 1+2+3+4+5+6+7
function sumofNumbers(numbers) {
    let sum = 0;
    for (let i = 1; i <= numbers; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
const sarafar = sumofNumbers(7);
console.log(sarafar);