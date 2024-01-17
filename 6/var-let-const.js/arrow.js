/*  */
function add(a,b){
    const result=a+b;
    return result;
}
const sum = add(5,90);
console.log(sum);


/* function expression  */
const add2 = function(a,b){
    return a+b;
}
const para=add2(2,3);
console.log(para);

// funcion arrow
const add3 = (a,b) => a+b;
const para1 = add3(2,10);
console.log(para1);

const add4 = (num1,num2,num3,num4,num5) => num1+num2+num3+num4+num5;
const para2 = add4(1,2,3,4,5);
console.log(para2);

const mult = (a,b) => a*b;
const para3 = mult(10,50);
console.log(para3);