const user = {id:101,name:'sharafat',job:'actor'};
console.log(user);
const stringfiy = JSON.stringify(user);
console.log(stringfiy);

/* 2 */
const shop = {
    owner:'alia',
    address:{
        street:'kocukhate ar boter globalThis',
        country:'ranibir',
        city:'bangladesh'
    },
    products:['laptop','keybord','monitor','mac'],
    price:[45000,5000,100000,500000],
    isOpen:true
}
// console.log(shop);
const stringfi = JSON.stringify(shop);
console.log(stringfi);
const shopObject = JSON.parse(stringfi);
console.log(shopObject);
