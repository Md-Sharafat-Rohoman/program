const country = 'bangladesh';
console.log(typeof country);

const age = 50;
console.log(typeof age);

const isindependent = true;
console.log(typeof isindependent);

const student ={id:121,class:11,name:'sharafat'};
console.log(typeof student);
console.log(Array.isArray(student));

// check array using array .isarray 
const friends = [12,23,45,25,14,21,23,16];
console.log(Array.isArray(friends));
// console.log(typeof friends);

function add(num1,num2){
    return num1 + num2;
}
console.log(typeof add);

// --------------------
console.log(friends.includes(23));
console.log(friends.includes(27));


// --------------------
if(friends.indexOf(150) !==-1){

}

// concat
const number = [10,20,30,40,50];
const allnumber =number.concat(friends);
console.log(allnumber);