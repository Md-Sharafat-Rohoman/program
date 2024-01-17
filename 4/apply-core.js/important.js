var myName = 'sharafat-rohoman';
// array
var myFriends = ['tamim','baker','yeasin','ibrahim','nokib'];
var thirdName = myFriends[2];
console.log(thirdName);
myFriends[2] = 'natasa';
console.log(myFriends);

// conditional
if(myFriends < 6){
    console.log('tore dia kaj hove');
}
else{
    console.log('tui bala no');
}

// loop 
var number = 0;
while(number <= 7){
    console.log(number);
    number++;
}
for(var i=0; i<=9; i++){
    console.log(i);
}
function ismoonup(time){
    if(time>7){
        return true;
    }
}
// let age = 11;
// age = 12;
// const countryName = 'bangladesh';
// // countryName = 'sharafat';
// console.log(age,countryName);


// milas to kilomiter 
function milsTokilo(miles){
    const kilomiter = miles/1.609;
    return kilomiter;
}
const sharafat = milsTokilo(10);
console.log(sharafat); 




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