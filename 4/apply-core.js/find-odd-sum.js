function getsum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i ;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index , element,sum);
    }
    return sum;
    // console.log(numbers)
}

function getoddnumbrs(numbers){
    const oddNumbers = [];
    for(let i=0; i<numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element % 2 !== 0){
        console.log(index,element);
        oddNumbers.push(element);
    }
    }
    return oddNumbers;
}


const mynumbers = [12,16,4,69,90,57,34];
const oddNumbers = getoddnumbrs(mynumbers);
console.log(oddNumbers);
// getsum(mynumbers);