/* 1 */
const numbers = [2,4,5,6];

const doubled=[];
for(const num of numbers){
    const double = num*2;
    doubled.push(double);
}
console.log(doubled);

/* 2 */
const sonkha = [1,2,3,4,5,6,7];

function doubles(nuw){
    return nuw*2;
}
const result = sonkha.map(doubles);
console.log(result);

/* 3 */
const para = [10,20,30,40,50,60];
const tofarasa =n => n*2;
const fat = para.map(tofarasa);
console.log(fat);