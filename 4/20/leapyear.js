function isleapyear(year){
    const reminder = year % 4;
    if(reminder === 0 ){
        return true;
    }
    else{
        return false;
    }

}
const name = isleapyear(1952);
console.log('name:',name);
console.log(isleapyear(1953));