function woodcalculator(chairquantity,tablequantity, bedquantity){
    const percahirwood = 3;
    const pertablewood = 10;
    const perbedwood = 50;

    const cahirwood = chairquantity*percahirwood;
    const tablewood = tablequantity*pertablewood;
    const bedwood = bedquantity*perbedwood
    // console.log(chairquantity,tablequantity,bedquantity)
    const totalwood = cahirwood + tablewood + bedwood;
    return totalwood;
}
const totalwood = woodcalculator(2,2,5);
console.log('total wood requard:',totalwood);