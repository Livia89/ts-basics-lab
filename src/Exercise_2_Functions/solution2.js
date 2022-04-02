"use strict";
// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 2 – Functions
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈
Object.defineProperty(exports, "__esModule", { value: true });
// Objectives: 
// • Convert existing JavaScript functions to TypeScript
// • Understand functions as types
// • Convert specifically-typed functions to more
//   flexible generic functions
exports.default = () => {
    // ======== Exercise 2.1 ========
    // Instructions:
    // • Add explicit parameter types and return type
    // • Fix any errors resulting from invalid types
    function add(x, y) {
        return x + y;
    }
    function sumArray(numbers) {
        return numbers.reduce(add, 0);
    }
    const someSum = sumArray([3, 6, 9]);
    console.log('[Exercise 2.1]', `3 + 6 + 9 == ${someSum}`);
    // ======== Exercise 2.2 ========
    // Instructions:
    // • Add explicit parameter types and return types to the `deposit` function
    // • Make the function's `message` parameter *optional*
    const bankAccount = {
        money: 0,
        deposit(value, message) {
            this.money += value;
            if (message) {
                console.log(message);
            }
        }
    };
    bankAccount.deposit(20);
    bankAccount.deposit(10, 'Deposit received');
    console.log('[Exercise 2.2]', `Account value: $${bankAccount.money}`);
    // ======== Exercise 2.3 ========
    // For a given word, we compute its Scrabble® score.
    // Instructions:
    // • Add type annotations wherever possible
    function computeScore(word) {
        const letters = word.toUpperCase().split('');
        return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
    }
    function getPointsFor(letter) {
        const lettersAndPoints = [
            ['AEOIULNRST', 1],
            ['DG', 2],
            ['BCMP', 3],
            ['FHVWY', 4],
            ['K', 5],
            ['JX', 8],
            ['QZ', 10],
        ];
        return lettersAndPoints.reduce((computedScore, pointsTuple) => {
            const [letters, score] = pointsTuple;
            if (letters.split('').find((ll) => ll === letter)) {
                return computedScore += score;
            }
            return computedScore;
        }, 0);
    }
    console.log('[Exercise 2.3]', `zoo is worth ${computeScore('zoo')} points.`);
    // ======== Exercise 2.4 ========
    // Instructions:
    // • Add explicit parameter types and return types
    // • Add a default greeting: "hello"
    function greet(greeting = 'hello') {
        return greeting.toUpperCase();
    }
    const defaultGreeting = greet();
    const portugueseGreeting = greet('Oi como vai!');
    console.log('[Exercise 2.4]', defaultGreeting, portugueseGreeting);
    // ======== Exercise 2.5 ========
    // Instructions:
    // • Add parameter type annotation
    // • Even though this function doesn't return, add an explicit return type
    function layEggs(quantity, color) {
        console.log(`[Exercise 2.5] You just laid ${quantity} ${color} eggs. Good job!`);
    }
    layEggs(10, 'blue');
    // ======== Exercise 2.6 ========
    // Here we've initialized two variables with function types.
    // Later we assign them to functions.
    // Instructions:
    // • Fix the errors
    let multiply;
    let capitalize;
    capitalize = function (value) {
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
    };
    multiply = function (x, y) {
        return x * y;
    };
    console.log('[Exercise 2.6]', capitalize(`nifty ${multiply(5, 10)}`));
};
