const placesList= document.getElementById('places-list');
const li = document.createElement('li');
li.innerText= 'tasphia rohoman';

placesList.appendChild(li);

// ekgorgeg
const mainContainer = document.getElementById('main-container');
const section= document.createElement('section');
const h1= document.createElement('h1');
h1.innerText='tumaker onk balo basi';
section.appendChild(h1);

const ul= document.createElement('ul');
const li2 = document.createElement('li');
li2.innerText ='tui onk balo ';
ul.appendChild(li2);
section.appendChild(ul);


mainContainer.appendChild(section);