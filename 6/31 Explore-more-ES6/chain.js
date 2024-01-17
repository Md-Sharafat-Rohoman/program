const date = [{id:1, name:'sharafat',address:'kocu khat'}];
// console.log(date[0].address);


const books ={
    physics:2,
    chemistry:10,
    others:[
        {id:1,bangla:15,page:'two hundred page'},
        {id:2,math:10,page:[
            {name:'al-amin sharafat',talent:'something'},
            {name:'yeasin arafat',talent:'overall'}
        ]},
    ]
}
console.log(books.others[1].page[0].name);