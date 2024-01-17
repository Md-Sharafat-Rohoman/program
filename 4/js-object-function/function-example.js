function getAverage(assignment1,assignment2,assignment3){
    var sum = assignment1+assignment2+assignment3;
    var average = sum/3;
    return average;
}
var number = getAverage(50,60,40);
console.log(number);