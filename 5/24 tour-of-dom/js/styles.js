// const section = document.getElementsByTagName('section');
// console.log(section);

 const sections= document.querySelectorAll('section');
//  console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.border='2px solid steelblue';
    section.style.marginBottom = '10px';
    section.style.borderRadius='20px';
    section.style.backgroundColor = 'yellow'
}

const placesContainer = document.getElementById('places-container');
// console.log(placesContainer);
placesContainer.classList.add('yellow-bg');
placesContainer.classList.remove('sarafat')