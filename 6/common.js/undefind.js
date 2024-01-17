let first;
// console.log(first);
function second(a,b){
    const total = a+b;
}
const result = second();
console.log(result);



function third(a,b,c,d){
    const totals= a+b+c+d;
    console.log(a,b,c,d);
}
third(5,6);


function noNegative(a,b){
    if(a<0 || b<0){
        return
    }
    return a+b;
}
const pass = noNegative(10,-15);
console.log(pass);

