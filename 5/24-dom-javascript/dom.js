// console.log('my name is sharafat');
// console.log(document)
const sections = document.querySelectorAll('section')
    // console.log(section)
    for(const section of sections){
        // console.log(section);
        section.style.border='2px solid green' ;
        section.style.marginTop = '50px';
        section.style.borderRadius='50px';
        section.style.textAlign= 'center';
        section.style.backgroundColor='lightgray';
    }
