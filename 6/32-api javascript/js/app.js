function loadData2() {

    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(res => res.json())
        .then(date => console.log(date));
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(date => console.log(date));
}
// function loadUsers() {

//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(date => console.log(date));
// }