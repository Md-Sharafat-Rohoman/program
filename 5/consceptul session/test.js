
const h1 = document.getElementById('parent-one');
// console.log(h1);
// h1.style.color='green';
// h1.style.fontSize='80px';
// console.log(h1.innerText);
// h1.innerText="sharafat rohoman";
// h1.textContent='asdfasdfasdfg';

  
const alltags= document.getElementsByClassName('item');
// console.log(alltags);

for(let item of alltags){
    // console.log(item);
     item.style.color='red';
}



const mytags= document.getElementsByTagName('li');
// console.log(mytags);

for(let i=0; i<mytags.length;i++){
    // console.log(mytags[i]);
    let element = mytags[i];
    element.style.color='red'
}



const h2=document.querySelector('#parent-one');
console.log(h);
const li=document.querySelectorAll('.item');
// console.log(li);
for(let item of li){
    console.log(item);
    item.style.color='black';
}