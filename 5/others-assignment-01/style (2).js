// first
let total = 0 ;
function calculateTriangleArea() {
    
    addToCalculationEntry('K-Accessories');

    const rectangleWidth = document.getElementById('price').innerText;

  
    total = parseInt(total) + parseInt(rectangleWidth);
    console.log(total);
    document.getElementById('first').innerText = total;


}

   
    function addToCalculationEntry(areaType){
        console.log(areaType);
        const ToCalculationEntry = document.getElementById('calculation-entry');
        const count = ToCalculationEntry.childElementCount;
    
        const p = document.createElement('p');
        p.classList.add('my-4');
        p.innerHTML = `${count + 1}. ${areaType} `;
        ToCalculationEntry.appendChild(p);
    }




  

