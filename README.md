# Tricky JavaScript Code Snippets

    This repository contains a collection of tricky JavaScript code snippets along with explanations to help you understand some of the more advanced concepts in JavaScript.

## Code Snippets

### 1. Variable Hoisting

```javascript
console.log(foo); // Output: undefined
var foo = 'Hello';
console.log(foo); // Output: Hello
```
    Explanation: Variable declarations (var) are hoisted to the top of their scope. The variable foo is hoisted but not initialized, so it is undefined when first logged.
    
### 2. Closures and Loops

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// Output after 1 second: 3 3 3
```
      Explanation: The variable i is shared across all iterations because var is function-scoped. By the time the setTimeout callback executes, the loop has completed, and i is 3.

### 3. Immediately Invoked Function Expression (IIFE)

```javascript
(function() {
    var foo = 'Hello';
    console.log(foo); // Output: Hello
})();
console.log(foo); // ReferenceError: foo is not defined
```
    Explanation: The variable foo is scoped to the IIFE and not accessible outside of it, preventing namespace pollution.

### 4. The this Keyword

```javascript
const obj = {
    value: 42,
    printValue: function() {
        console.log(this.value);
    }
};

obj.printValue(); // Output: 42

const print = obj.printValue;
print(); // Output: undefined (in strict mode) or global value (non-strict mode)
```
    Explanation: The value of this depends on how the function is called. print is called as a standalone function, so this is not obj.
    
### 5. Arrow Functions and this

```javascript
function Counter() {
    this.count = 0;
    setInterval(() => {
        this.count++;
        console.log(this.count);
    }, 1000);
}

const counter = new Counter();
// Output: 1, 2, 3, ... (incrementing every second)
```
    Explanation: Arrow functions do not have their own this. They inherit this from the parent scope, which is Counter in this case.

### 6. Destructuring with Default Values

```javascript
const obj = { a: 1, b: 2 };
const { a, b, c = 3 } = obj;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```
    Explanation: The destructured variable c gets the default value 3 because c is not a property of obj.

### 7. Spread Operator with Objects

 ```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }
 ```
     Explanation: Properties from obj2 overwrite those in obj1 when using the spread operator.
     
### 8. Array Flattening

```javascript
const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, [4]]
```
    Explanation: The flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

### 9. Short-Circuit Evaluation

```javascript
const a = null;
const b = 'Hello';
const result = a || b;
console.log(result); // Output: Hello
```
    Explanation: The || operator returns the first truthy value. Since a is null (falsy), b is returned.

### 10. Optional Chaining

```javascript
const obj = { a: { b: { c: 42 } } };
console.log(obj.a?.b?.c); // Output: 42
console.log(obj.x?.y?.z); // Output: undefined
```
    Explanation: Optional chaining (?.) allows you to safely access deeply nested properties without worrying about whether an intermediate property is null or undefined.
