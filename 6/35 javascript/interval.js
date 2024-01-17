console.log(1);
console.log(2);
/* setTimeout(()=>{
    console.log(3)
},1000) */
let num=0;
const setIntervalID = setInterval(()=>{
    console.log(++num)
    if(num ===10){
        clearInterval(setIntervalID)
    }
},1000)
console.log(4);
console.log(5);
console.log(6);