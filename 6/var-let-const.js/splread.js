const max = Math.max(3,33,4,5,6,66,43);
console.log(max);

const numbers = [3,4,5,6,7,8,84];
const arrayMax= Math.min(...numbers);
console.log(arrayMax);


const nums = [3,4,5,6];
const nums2 = nums;
nums2.push(26);
console.log(nums)
console.log(nums2);



const friends = [4,5,6,7];
const bondhu = friends;
const dosto  = [...friends];
console.log(dosto);
console.log(friends);
friends.push(100);
console.log(dosto);
console.log(friends);


/* */
const sonkha = [...friends , 666];
console.log(sonkha);
