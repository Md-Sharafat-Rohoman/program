function gemsToDimond(x, y, z) {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number'){
        return 'please provide me an number';
    }
     
    else if (x<0 || y<0 || z<0 ) {
        return 'please provide me an positive number';
    }
    else{
        const frin1 = 21;
        const frin2 = 32;
        const frin3 = 43;
    
        const total = (x*frin1)+(y*frin2)+(z*frin3);
        if(total>2000){
            return total-2000;
        }
        else{
            return total;
        }
    }
}
// console.log(gemsToDimond(1,1,1));
// console.log(gemsToDimond(20,200,50));
console.log(gemsToDimond(100,5,1));