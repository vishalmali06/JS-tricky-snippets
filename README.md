# JavaScript Questions and Answers - Tricky

    This repository contains a collection of tricky JavaScript code snippets along with explanations to help you understand some of the more advanced concepts in JavaScript.

### 1. What is the output of console.log(0.1 + 0.2); and why?
    Answer: The output is 0.30000000000000004. This is due to the floating-point precision errors in JavaScript which uses binary floating-point numbers as specified by IEEE 754.

### 2. What is the output of console.log(0.1 + 0.2 == 0.3); and why?
    Answer: The output is false. This is because 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3 due to floating-point precision issues.
    
### 3. What is the order of output for the following code?

```javascript
console.log(1); 
setTimeout(function(){console.log(2)}, 1000); 
setTimeout(function(){console.log(3)}, 0);

// Output :
// 1
// 3
// 2
```
    console.log(1) executes first, then setTimeout with 0 delay, and finally setTimeout with 1000 milliseconds delay.

### 4. What is the order of output for the following code?

```javascript
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// Output :
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
```

### 5. What is the output of the following code and why?

```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
}

// Output :
// 5
// 5
// 5
// 5
// 5
```
    This is because var has function scope, not block scope. By the time the setTimeout functions execute, the loop has completed and i is 5.

### 6. What is the output of the following code and why?

```javascript
console.log(1 + "2" + "2"); 
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);

// Output :
// 122
// 32
// 02
// 112
// NaN2
// NaN
```

### 7. What is the output of the following code and why?

```javascript
const obj = {
    value: 42,
    arrowFunction: () => {
        console.log(this.value);
    },
    regularFunction: function () {
        console.log(this.value);
    },
};
obj.arrowFunction();
obj.regularFunction();

// Output:
// undefined
// 42
```
    Arrow functions do not have their own this; they inherit this from the enclosing context which is the global object in this case.

### 8. What is the output of the following code and why?

```javascript
const obj = { name: 'Sachin', age: 30 };
obj.age = 40;
Object.freeze(obj);
console.log(obj);

// Output:
// { name: 'Sachin', age: 40 }
```
    The age was modified before freezing. After freezing, further modifications to the object are not allowed.

### 9. What is the output of the following code and why?

```javascript
console.log([9,8,7,6][1,2,3]);
var a = 3
var a = 4
console.log(a)

// Output:
// 6
// 4
```
    In the array, the expression [1,2,3] evaluates to 3 (last value), hence 6 is logged. var allows redeclaration, so a is 4.

### 10. What is the output of the following code and why?

```javascript
const z = (1,2,3,4,5);
console.log(z);

// Output:
// The output will be 5. The comma operator returns the last operand.
```

### 11. What is the output of the following code and why?

```javascript
let b = 3
let b = 4
console.log(b)

// Output:
// This code will throw a SyntaxError: Identifier 'b' has already been declared because let does not allow redeclaration..
```

### 12. What is the output of the following code and why?

```javascript
let a = 1;
{
    var a = 5;
}
console.log(a)

// Output:
// This code will throw a SyntaxError: Identifier 'a' has already been declared because var inside the block tries to redeclare a which is not allowed since a was already declared with let.
```

### 13. What is the output of the following code and why?

```javascript
const name = "vikas";
name[0] = 'r';
console.log(name);

// Output:
// The output will be vikas. Strings are immutable in JavaScript, so you cannot change an individual character.
```

### 14. What is the output of the following code and why?

```javascript
(function () {
    setTimeout(() => console.log(1), 2000); 
    console.log(2);
    setTimeout(() => console.log(3), 0);
    setTimeout(() => console.log(5), 2000);
    console.log(4);
})();

// Output:
// 2
// 4
// 3
// 1
// 5
```
    2 and 4 are logged first, then 3 (0 ms delay), followed by 1 and 5 (both after 2000 ms).

### 15. What is the output of the following code and why?

```javascript
const a = () => console.log('baz');
const b = () => console.log('foo');
const c = () => console.log('zoo');
const run = () => {
    console.log('run');
    setImmediate(a);
    new Promise((resolve, reject) => {
        resolve('bar');
    }).then((resolve) => {
        console.log(resolve);
        process.nextTick(b);
    });
    process.nextTick(c);
};
run();

// Output:
// run
// zoo
// bar
// foo
// baz
```
    process.nextTick callbacks are executed after the current operation completes, but before the event loop continues. setImmediate executes after the I/O events.

### 16. What is the output of the following code and why?

```javascript
const obj = { 
    name: { 
        firstName: "alice", 
        lastName: null,
        name1: {
            firstName: "vishal", 
            lastName: null,
            name2: {
                firstName: "vishal 1", 
                lastName: null,
            }
        }
    }, 
    address: { 
        number: 12345, 
        country: "London", 
        pincode: 208027 
    }, 
    date: new Date(123),
    email: "foo@bar.com", 
    hobbies: ["singing", "dancing", "music"], 
    getLog: function () {
        return 'dd';
    }
};
```

```javascript
// Manual Object Clone in javascript
function deepClone(obj) {
    // Handle null, undefined or primitive types
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // Handle Array
    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

    // Handle Object
    if (obj instanceof Object) {
        const objCopy = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                objCopy[key] = deepClone(obj[key]);
            }
        }
        return objCopy;
    }

    throw new Error('Unable to copy object! Its type isn't supported.');
}

let deepClone1 = deepClone(obj);
console.log(deepClone1);
```
    Use the deepClone function provided to deep clone the obj. The deepClone1 will be a deep copy of obj.

### 17. How do you count the occurrence of each element in an array using reduce?

```javascript
const arr = [1, 2, 3, 3, 44, 44, 44];
const countOccurrences = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(countOccurrences);

// Output:
// { '1': 1, '2': 1, '3': 2, '44': 3 }
```

### 18. How do you flatten the following array?

```javascript
const arr1 = [1,[1,2],[3,4,5]];

const flattened = arr1.flat();
console.log(flattened);

// Output:
//  How do you flatten the following array?

```

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
