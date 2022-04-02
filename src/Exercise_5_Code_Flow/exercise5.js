"use strict";
// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 5 – Code flow analysis
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈
Object.defineProperty(exports, "__esModule", { value: true });
// Objectives: 
// • Understand how TypeScript performs code flow analysis
// • Create and apply union and intersection types
// • Use basic type guards (narrowing types w/ typeof, instanceof, etc.)
exports.default = () => {
    // ======== Exercise 5.1 ========
    // Instructions:
    // • Restrict type of `value` to `string OR number`
    // • Fix any resulting errors.
    function doStuff(value) {
        if (typeof value === 'string') {
            console.log(value.toUpperCase().split('').join(' '));
        }
        else if (typeof value === 'number') {
            console.log(value.toPrecision(5));
        }
        value; // hover over `value` here
    }
    doStuff(2);
    doStuff(22);
    doStuff(222);
    doStuff('hello');
    doStuff(true);
    doStuff({});
    console.log('[Exercise 5.1]');
    // ======== Exercise 5.2 ========
    // Instructions:
    // • Use a type guard to fill out the body of the `padLeft` function.
    function padLeft(value, padding) {
        // if padding is a number, return `${Array(padding + 1).join(' ')}${value}`
        // if padding is a string, return padding + value
    }
    console.log('[Exercise 5.2]', `
    ${padLeft('🐕', 0)}
    ${padLeft('🐕', '🐩')}
    ${padLeft('🐕', '🐩🐩')}
    ${padLeft('🐕', '🐩🐩🐩')}
    ${padLeft('🐕', '🐩🐩🐩🐩')}
  `);
    // ======== Exercise 5.3 ========
    // Instructions:
    // • Add type annotations (`any` excluded)
    // • Inspect inferred type of `element` in different code branches
    const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
    function flatten(array) {
        const flattened = [];
        for (const element of array) {
            if (Array.isArray(element)) {
                element; // any[]
                flattened.push(...element);
            }
            else {
                element; // any
                flattened.push(element);
            }
        }
        return flattened;
    }
    const flattenedNumbers = flatten(numbers);
    console.log('[Exercise 5.3]', flattenedNumbers);
    // -----------------------
    // add type alias(es) here
    // type BirdLike = ?
    // -----------------------
    class Bird {
        constructor(species) {
            this.species = species;
        }
        layEggs() {
            console.log('Laying bird eggs.');
        }
        fly(height) {
            console.log(`Flying to a height of ${height} meters.`);
        }
    }
    ;
    class Fish {
        constructor(species) {
            this.species = species;
        }
        layEggs() {
            console.log('Laying fish eggs.');
        }
        swim(depth) {
            console.log(`Swimming to depth of ${depth} meters.`);
        }
    }
    function getRandomAnimal() {
        const animals = [
            new Bird('puffin'),
            new Bird('kittiwake'),
            new Fish('sea robin'),
            new Fish('leafy seadragon'),
        ];
        return animals[Math.floor(Math.random() * animals.length)];
    }
    function interrogateAnimal(animal = getRandomAnimal()) {
        animal.swim(10); // call only if it is a fish
        animal.fly(10); // call only if it is a bird
        return animal.species;
    }
    console.log('[Exercise 5.4]', `We've got a ${interrogateAnimal()} on our hands!`);
};
