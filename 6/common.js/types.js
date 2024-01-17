const a = 60;
const b = 'sharafat';
const c = true;
const d = [10,203,30];
const e = {id:10,name:'sharafat'};
console.log(typeof a,typeof b,typeof c,typeof d,typeof e);


let x = 10;
let y = x;
console.log(x, y);
y = 20;
console.log(x, y);

for(var i=0; i<10; i++){
    console.log(i);
}
console.log('sharafat',i);


function print5(){
    console.log('inside five',5);
}
print5();