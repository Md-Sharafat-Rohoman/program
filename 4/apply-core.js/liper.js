function isliper(year){
    const reminder = year % 4;
    if(reminder == 0){
        // console.log('liper hove',year)
        return true;
    }
    else{
        // console.log('tui liper hovi na',year)
        return false
    }
}
const house = isliper(2024);
console.log(house);
const gor = isliper(1962);
console.log(gor);