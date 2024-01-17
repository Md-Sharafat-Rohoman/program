function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(sara => displayUsers2(sara))
}
function displayUsers2(fat) {
    const ul = document.getElementById('user-list')
    for (const users of fat) {
        console.log(users.id)
        const li = document.createElement('li')
        li.innerText = users.id;
        ul.appendChild(li);
    }
}