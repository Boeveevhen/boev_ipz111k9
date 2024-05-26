//1
function unique(arr) {
    return Array.from(new Set(arr));
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(unique(numbers)); 
//2
function aclean(arr) {
    let uniqueWords = {};

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        uniqueWords[sorted] = word;
    }

    return Object.values(uniqueWords);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); 
//3

function countOccurrences(arr) {
    let counts = {};
    arr.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });
    let resultMap = new Map();
    for (let key in counts) {
        resultMap.set(Number(key), counts[key]);
    }

    return resultMap;
}

let numberrs = [1,2,3,4,2,1,3,5,6,5];
console.log(countOccurrences(numberrs)); 
//4
function areallUnique(arr) {
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return false; 
        }
        seen[arr[i]] = true; 
    }

    return true; // 
}

console.log(areallUnique([1, 2, 3, 4, 5])); 
console.log(areallUnique([1, 2, 3, 2, 4, 5])); 


