//1
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";
let removedElement = styles.shift();
console.log(removedElement);
styles.unshift("Rap", "Reggae");
console.log(styles);
//2
function sumInput() {
    let numbers = [];
    let input;

    while (true) {
        input = prompt("Введіть число:");

        if (input === null || input.trim() === "" || isNaN(input)) {
            break;
        }

        numbers.push(+input); 
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

let result = sumInput();
alert("Сума: " + result);
//3
function getMaxSubSum(arr) {
    let maxSum = 0;

    for (let start = 0; start < arr.length; start++) {
        let currentSum = 0;
        for (let end = start; end < arr.length; end++) {
            currentSum += arr[end];
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }

    return maxSum;
}
console.log(getMaxSubSum([2, -1, 2, 3, -9])); 
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2])); 
console.log(getMaxSubSum([100, -9, 2, -3, 5])); 
console.log(getMaxSubSum([1, 2, 3])); 

