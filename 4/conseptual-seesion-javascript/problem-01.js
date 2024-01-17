// // তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে ফাংশনটির নাম isinteger() . আউটপুট হিসেবে একটি boolean রিটার্ন করবে .

// সংখ্যাটি ইন্তেজার হলে ট্রুর রিটার্ন করবে 
// অন্যথায় ফল রিটার্ন করবি



function isinteger(number){
if(typeof number !== 'number'){
    return 'please provide a number'
}
if(number % 1 === 0){
    return true ;
}
else{
    return false ;
}
}

console.log(isinteger(2));