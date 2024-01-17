// 1*2*3*4*5*6*7
function multiplication(number){
    let result = 1;
    for(let i=1;i<=number;i++ ){
        result = result*i;
    }
    return result;
}
const fat = multiplication(9);
console.log(fat);