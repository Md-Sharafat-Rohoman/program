function findingBadData(arr){
    if(!Array.isArray(arr) == true){
        return 'please provide me an array of number'
    }
    else {
        let BadData = 0;
        // for(let i = 0; i< arr .length; i++){
            // if(typeof arr[i] !== 'number'){
            //     return 'please provide me an array of number'

            // }
            // else{
            //     if(arr[i]<0){
            //         return BadData++;
            //     }
            // }

        // }
        for(let item of arr){
            if(typeof item !== 'number'){
                return 'please provide me an array of number'
            }else{
                if(item < 0){
                    BadData++;
                }
            }
        }
        return BadData;
    }
}
const x =[1,2,5,-8,-3,7,-9,10,-21];
console.log(findingBadData(x));