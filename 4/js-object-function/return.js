function add(number1 , number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    console.log(sum);
    return sum;
}
// add(20,60);
var total = add(50,40);
console.log('total:',total);



// singaras
function bringsingara(money){
    var singaraprice = 20;
    var quality = money / singaraprice;
    return quality;
}
var mytaka = 150;
var singaras = bringsingara(mytaka);
console.log('toatal:',singaras);