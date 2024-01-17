// তোমাকে একটা ফাংশন দেয়া হবে called mindGame  যা ইনপুট হিসেবে একটা positive number নেবে |
//  এখন তোমার task: তোমাকে সেই নাম্বারের সাথে তিন গুণ করে তারপর ১০ যোগ করে তারপর দুই দিয়ে ভাগ করে তারপর ফাঁস বিয়োগ করে যা ইনফোটা আসবে তার রিটার্ন করতে হবে
//  sample input & output 
//  input : 5
//  output : 7.5

function mindGame(x){
    // if(typeof x !== 'number'){
    //     return 'please provide a number'
    // }
    // else if ( x <= 0){
    //     return 'please provide me a positive number'
    // }
    // else{
    //     const result = (((x*3)+10)/2)-5 ;
    //     return result ;
    // }
    if(typeof x !== 'number' && x <= 0){
        return 'please provide a number'
    }
 
    else{
        const result = (((x*3)+10)/2)-5 ;
        return result ;
    }
}
console.log(mindGame(5));