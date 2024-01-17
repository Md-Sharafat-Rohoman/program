function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Invalid input.";

    }
   else{
    return number ** 3;
   } 

}
let output = cubeNumber(3);
console.log(output);
