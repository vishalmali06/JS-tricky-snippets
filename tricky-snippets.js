// 1. Variable Hoisting
console.log(foo); // Output: undefined
var foo = 'Hello';
console.log(foo); // Output: Hello

// 2. Closures and Loops
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// Output after 1 second: 3 3 3

// 3. Immediately Invoked Function Expression (IIFE)
(function() {
    var foo = 'Hello';
    console.log(foo); // Output: Hello
})();
// console.log(foo); // ReferenceError: foo is not defined

// 4. The `this` Keyword
const obj = {
    value: 42,
    printValue: function() {
        console.log(this.value);
    }
};

obj.printValue(); // Output: 42

const print = obj.printValue;
print(); // Output: undefined (in strict mode) or global value (non-strict mode)

// 5. Arrow Functions and `this`
function Counter() {
    this.count = 0;
    setInterval(() => {
        this.count++;
        console.log(this.count);
    }, 1000);
}

const counter = new Counter();
// Output: 1, 2, 3, ... (incrementing every second)

// 6. Destructuring with Default Values
const obj2 = { a: 1, b: 2 };
const { a, b, c = 3 } = obj2;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// 7. Spread Operator with Objects
const obj3 = { a: 1, b: 2 };
const obj4 = { b: 3, c: 4 };
const mergedObj = { ...obj3, ...obj4 };
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

// 8. Array Flattening
const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, [4]]

// 9. Short-Circuit Evaluation
const a = null;
const b = 'Hello';
const result = a || b;
console.log(result); // Output: Hello

// 10. Optional Chaining
const obj5 = { a: { b: { c: 42 } } };
console.log(obj5.a?.b?.c); // Output: 42
console.log(obj5.x?.y?.z); // Output: undefined
