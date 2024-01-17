const phones = [
    {name:'samsung',camera:'12',storage:'32gb',price:36000,color:'silver'},
    {name:'walton',camera:'10',storage:'32gb',price:22000,color:'silver'},
    {name:'iphone',camera:'10',storage:'32gb',price:82000,color:'silver'},
    {name:'xaomi',camera:'12',storage:'32gb',price:52000,color:'silver'},
    {name:'oppo',camera:'12',storage:'32gb',price:20000,color:'silver'},
    {name:'nokia',camera:'12',storage:'32gb',price:44000,color:'silver'},
    {name:'vivo',camera:'12',storage:'32gb',price:62000,color:'silver'},
];
function cheapestphone(phones){
    let cheapest = phones[0];
    for(let i=0;i<phones.length;i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
        // console.log(phone);
    }
    return cheapest;
}
const myselection = cheapestphone(phones);
console.log(myselection);