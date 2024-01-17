function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "string1 , string2";
    }

    for (let i = 0; i < string1.length; i++) {
        for (let j = i + 1; j <= string1.length; j++) {
            const subString = string1.slice(i, j);
            
            if (string2.includes(subString)) {
                return true;
            }
        }
    }

    return false;
}

console.log(matchFinder("John Doe", "ohn"));         // true
console.log(matchFinder("JavaScript", "Code"));      // false
console.log(matchFinder("Peter Parker", "Pen"));     // false
console.log(matchFinder("Peter Parker", "pet"));     // false