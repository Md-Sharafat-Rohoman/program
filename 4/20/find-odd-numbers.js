function getsumarray(number){
    let sum = 0;
    for(let i=0; i<number.length; i++){
        const index = i;
        const element= number[index];
        sum =sum + element;
        console.log(index,element,sum);
    }
    return sum;
}
const name = [101,20,30,40,506,70]
console.log(getsumarray(name));


// 
console.log(!5)