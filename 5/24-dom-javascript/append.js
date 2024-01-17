// // 1 where to add
// const placesList = document.getElementById('places-list');
// // 2 what to add
// const li = document.createElement('li');
// li.innerText='my name is';
// // 3
// placesList.appendChild(li);



//1 new collection
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

// 2 
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'kodo';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'muri';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'chanacur';
ul.appendChild(li3);
section.appendChild(ul); 

mainContainer.appendChild(section);