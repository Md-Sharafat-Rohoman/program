const difference = (x,y) => x-y;
const biage = difference(10,5);
console.log(biage);


const multiply = (first,second,third,fifth) => first*second*third*fifth;
const sara = multiply(3,3,3,3);
console.log(sara);

const getAge = (person) => person.age;
const student = {name:'sharafat',age:20};
const age = getAge(student);
console.log(age);


const getThird = (numbers) => numbers[2];
const third =getThird([3,3,9,3,3]);
console.log(third);

const num1= num => num*5;
const fat = num1(5);
console.log(fat);

const getPI= () => Math.PI;
console.log(getPI());



const math = (x,y,z) => {
    const sum= x+y+z;
    const multiply= x*y*z;
    const result = sum + multiply;
    return result;

}
const rohoman=math(4,4,4);
console.log(rohoman);