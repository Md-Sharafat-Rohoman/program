var shop = {
    books : 5,
    pen :6,
    mobile : 5,
    pencil :10,
    gang : 20
}
// console.log(shop);
var properties = Object.keys(shop);
console.log(properties);
var properties = Object.values(shop);
console.log(properties);


shop.books = 10;
console.log(shop);