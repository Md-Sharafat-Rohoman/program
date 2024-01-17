// ফাংশন নেম দিতে হবে isjavascriptfile .এই ফাংশনে প্যারামিটার হিসেবে নিবি একটি স্ট্রিম(string)| যেটি হবে একটি ফাইল নেম যেমন (index.js)| যদি এটি দেওয়া স্ক্রিপ ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে flase রিটার্ন করতে হবে|

// function isjavascriptfile(filename){
//     if(typeof filename !== 'string'){
//         return 'please provide me a valid filename'
//     }
//     if(filename .endsWith('.js') == true){
//         return true ;
//     }
//     else{
//         return false ;
//     }
//     // return filename.toLowerCase().endsWith('.js');
// }
// console.log(isjavascriptfile('sharafat-rohoman.js'));



function isjavascriptfile(filename){
    if(typeof filename !== 'string'){
        return 'please provide me a valid filename'
    }
    else{
        // hello.world.bd.js
        const arr = filename.split('.')
        const lastelement = arr.pop();
        return lastelement.toLowerCase() === "js";
        // return arr;
    }
}
console.log(isjavascriptfile('hello.world.bd.js'));