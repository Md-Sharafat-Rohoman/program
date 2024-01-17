function printDetails(person){
if(typeof person !== 'object'){
    return 'please provide me a object number'
}
else{
    const name = person.name ||'nai'
    const age = person.age ||'nai'
    const email = person.email ||'nai'
    const namea = person.namea ||'nai'
    // console.log(name,age,email,namea);
    return 'amar name'+name+'.amar age'+age+'.amar email'+email
}
}
const obj ={
    name:'sharafat',
    age :222,
    email :'mdsharafatrohomanzafourllah@gmail.com '

}
console.log(printDetails(obj));