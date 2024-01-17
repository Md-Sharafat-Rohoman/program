const studetn = {
    name:'sharafat rohoman',
    age:19,
    favouritMovies:['king khan','dhaker mash']
}
const studetnJson = JSON.stringify(studetn);
console.log(studetn);
console.log(studetnJson);

const studentObj = JSON.parse(studetnJson);
console.log(studentObj);