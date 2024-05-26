//1
function sumSalaries(salaries) {
    let total = 0;
    let Values = Object.values(salaries);
    for (let salary of Values) {
        total += salary;
    }

    return total;
}

let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};

let salaries2 = {}; 

console.log(sumSalaries(salaries)); 
console.log(sumSalaries(salaries2)); 
//2
function count(obj) {
    return Object.keys(obj).length;
}
let user = {
    name: 'Іван',
    age: 30,
};
console.log(count(user));

//3
let user1 = {
    name: "Іван",
    years: 30
};
let { name, years: age, isAdmin = false } = user1;
console.log(name); 
console.log(age); 
console.log(isAdmin); 
