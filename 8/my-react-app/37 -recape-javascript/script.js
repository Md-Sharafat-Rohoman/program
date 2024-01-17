const products = [
    {name:'phone',price:8000,brand:'iphone',color:'silver'},
    {name:'watch',price:3000,brand:'casio',color:'yellow'},
    {name:'sunglass',price:300,brand:'ray',color:'black'},
    {name:'camera',price:9000,brand:'canon',color:'gray'}

]
const  brands = products.map(products => products.brand);
console.log(brands);

const price = products.map(products => products.price);
console.log(price);


products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));


products.forEach(product => {


})

const filter=products.filter(product =>product.price <= 8000);
console.log(filter);

const name = products.filter(product => product.name.includes('ss'));
console.log(name);

const names = products.find(product => product.name.includes('n'));
console.log(names);