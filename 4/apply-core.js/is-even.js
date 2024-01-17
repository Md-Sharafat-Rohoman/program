console.log(typeof 10%2);
console.log(20%2);
console.log(20%2);
console.log(29%2);
console.log(58%2);
console.log(165%2);
console.log(160%2);
console.log(161%2);

// is even to odd

function isEven(number){
    const reminder = number % 2 ;
    if(reminder === 0){
        // console.log('valo to sharafat-rohoman :even');
        return true;
    }
    else{
         // console.log('valo na sharfat : odd');
        return false;
    }
}
const mynumber = isEven(301);
console.log(mynumber) ;
const myher= isEven(1906);
console.log(myher);