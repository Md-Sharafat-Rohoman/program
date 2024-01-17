let total = 0 ;
function calculateTriangleArea() {


    const rectangleWidth = document.getElementById('tamim').innerText;

    addToCalculationEntry('K-Accessories');

    total = parseInt(total) + parseInt(rectangleWidth);
    console.log(total);
    document.getElementById('first').innerText = total;

}
const rectangleWidths = document.getElementById('tamims').innerText;
    // const rectangleWidthText = rectangleWidth.parentNode.childNodes[1];
    // const react = (rectangleWidth);
    // let total = 0;
    // totals2 = parseInt(total + parseInt(react));
    // console.log(totals);

    // const baderHossen = getInputValue("baker")
    // const area = base * high;
    // 
    // function getInputValue(FieldId) {
    //     const inputField = document.getElementById(FieldId);
    //     const inputFieldValue = inputField.value;
    //     const value = parseFloat(inputFieldValue);
    //     return value;
    // }
    function addToCalculationEntry(areaType){
        console.log(areaType);
        const ToCalculationEntry = document.getElementById('calculation-entry');
        const count = ToCalculationEntry.childElementCount;
    
        const p = document.createElement('p');
        p.classList.add('my-4');
        p.innerHTML = `${count + 1}. ${areaType} cm<sup>2</sup> <button class="btn btn-success>convert </button>`;
        ToCalculationEntry.appendChild(p);
    }
    // 
    // function getInputValue(FieldId) {
    //     const inputField = document.getElementById(FieldId);
    //     const inputFieldValue = inputField.value;
    //     const value = parseFloat(inputFieldValue);
    //     return value;
    // }

    document.getElementById('baker').addEventListener('click',function(){
      
    })
  
    
  
  




  

