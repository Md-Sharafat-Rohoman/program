function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return false;
    } else {
        const sumOfChange = changeArray.reduce((sum, change) => sum + change, 0);

        if (sumOfChange >= totalDue) {
            return true;
        } else {
            return false;
        }
    }
}

// টেস্ট কেস ১:
const input1 = [1, 2, 5];
const totalDue1 = 10;
const result1 = canPay(input1, totalDue1);
console.log(result1); // আউটপুট: false

// টেস্ট কেস ২:
const input2 = [1, 5, 5];
const totalDue2 = 10;
const result2 = canPay(input2, totalDue2);
console.log(result2); // আউটপুট: true

// টেস্ট কেস ৩ (বোনাস):
const input3 = [];
const totalDue3 = 5;
const result3 = canPay(input3, totalDue3);
console.log(result3); // আউটপুট: false

