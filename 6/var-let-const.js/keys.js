const glass={
    name:'sharafat',
    color:'golden',
    price:50,
    isCleaned:true
}
console.log(glass);
const keys = Object.keys(glass);
console.log(keys);
const key = Object.values(glass);
console.log(key);

const pair = Object.entries(glass);
console.log(pair);

delete glass.isCleaned;
console.log(glass);

/* 3 */
const {isCleaned,...shortGlass}= glass;
console.log(shortGlass);

/* 4 */
Object.freeze(glass);
glass.source = 'bangladesh';
console.log(glass);
