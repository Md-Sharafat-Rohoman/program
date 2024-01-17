function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "Invalid Input";
    }
    if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Invalid Input";
    }
    const sortedArr = [...arr].sort((a, b) => a - b);
    if (sortedArr[0] === sortedArr[1]) {
        return "equal";
    }
    return sortedArr;
}
let output = sortMaker(2,3);
console.log(output);
