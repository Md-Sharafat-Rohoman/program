// for(var i=1; i<=20; i++){
//     console.log(i);
//     if(i>5){
//         break;
//     }
// }

// var roastgiven = 0;
// while(roastgiven < 10){
//     console.log('rast dan gift anci');
//     roastgiven++;
//     if(roastgiven > 4){
//         break;
//     }
// }

var items =['bottle','mouse','sunglass','pen','notebook'];
for(var i=0; i<items.length; i++){
    var item = items[i];
    if(item == 'pen'){
        break;
    }
    console.log(item);
}