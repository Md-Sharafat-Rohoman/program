let total = 0 ;
function calculateTriangleArea() {


    const rectangleWidth = document.getElementById('tamim').innerText;

    addToCalculationEntry('K-Accessories');

    total = parseInt(total) + parseInt(rectangleWidth);
    console.log(total);
    document.getElementById('first').innerText = total;

}
const rectangleWidths = document.getElementById('tamims').innerText;

    function addToCalculationEntry(areaType){
        console.log(areaType);
        const ToCalculationEntry = document.getElementById('calculation-entry');
        const count = ToCalculationEntry.childElementCount;
    
        const p = document.createElement('p');
        p.classList.add('my-4');
        p.innerHTML = `${count + 1}. ${areaType} cm<sup>2</sup> <button class="btn btn-success>convert </button>`;
        ToCalculationEntry.appendChild(p);
    }
 
    
  
  




  

