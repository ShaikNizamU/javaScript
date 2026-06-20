# JavaScript Interview Questions with Answers

--------------------------------------------------------
1. var with setTimeout
--------------------------------------------------------

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

Output:
4
4
4

Explanation:
- var is function-scoped.
- Only one variable i exists.
- Loop finishes first and i becomes 4.
- After 1 second, all callbacks print 4.

--------------------------------------------------------
2. let with setTimeout
--------------------------------------------------------

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

Output:
1
2
3

Explanation:
- let is block-scoped.
- Each iteration gets its own copy of i.

--------------------------------------------------------
3. Promise vs setTimeout
--------------------------------------------------------

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

Output:
Start
End
Promise
Timeout

Explanation:
- Synchronous code runs first.
- Promise callbacks (Microtask Queue) execute before setTimeout (Macrotask Queue).

--------------------------------------------------------
4. Nested setTimeout
--------------------------------------------------------

console.log("A");

setTimeout(() => {
  console.log("B");

  setTimeout(() => {
    console.log("C");
  }, 0);

}, 0);

console.log("D");

Output:
A
D
B
C

Explanation:
- A and D are synchronous.
- First timeout prints B.
- Second timeout prints C.

--------------------------------------------------------
5. Array Reference
--------------------------------------------------------

let a = [1, 2, 3];
let b = a;

b.push(4);

console.log(a);
console.log(b);

Output:
[1,2,3,4]
[1,2,3,4]

Explanation:
- Arrays are reference types.
- a and b point to the same array.

--------------------------------------------------------
6. typeof null
--------------------------------------------------------

console.log(typeof null);

Output:
object

Explanation:
- This is a known JavaScript bug.

--------------------------------------------------------
7. == vs ===
--------------------------------------------------------

console.log(1 == "1");
console.log(1 === "1");

Output:
true
false

Explanation:
- == compares values.
- === compares value and type.

--------------------------------------------------------
8. var Hoisting
--------------------------------------------------------

console.log(a);

var a = 10;

Output:
undefined

Explanation:
- var declarations are hoisted.

--------------------------------------------------------
9. let Hoisting
--------------------------------------------------------

console.log(a);

let a = 10;

Output:
ReferenceError

Explanation:
- let is hoisted but stays in the Temporal Dead Zone.

--------------------------------------------------------
10. Object Reference
--------------------------------------------------------

let obj1 = {
  name: "John"
};

let obj2 = obj1;

obj2.name = "Peter";

console.log(obj1.name);

Output:
Peter

Explanation:
- Objects are reference types.
- obj1 and obj2 point to the same object.

--------------------------------------------------------
11. Primitive Values
--------------------------------------------------------

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

Output:
10
20

Explanation:
- Primitive values are copied by value.

--------------------------------------------------------
12. typeof NaN
--------------------------------------------------------

console.log(typeof NaN);

Output:
number

Explanation:
- NaN means Not a Number but its type is number.

--------------------------------------------------------
13. null vs undefined
--------------------------------------------------------

console.log(null == undefined);
console.log(null === undefined);

Output:
true
false

Explanation:
- == performs type conversion.
- === checks type also.

--------------------------------------------------------
14. Closure
--------------------------------------------------------

function outer() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const increment = outer();

increment();
increment();
increment();

Output:
1
2
3

Explanation:
- Inner function remembers variables from outer function.

--------------------------------------------------------
15. map()
--------------------------------------------------------

const arr = [1,2,3];

const result = arr.map(x => x * 2);

console.log(result);

Output:
[2,4,6]

Explanation:
- map() creates a new array.

--------------------------------------------------------
16. filter()
--------------------------------------------------------

const arr = [1,2,3,4];

const result = arr.filter(x => x % 2 === 0);

console.log(result);

Output:
[2,4]

Explanation:
- Returns elements that satisfy the condition.

--------------------------------------------------------
17. reduce()
--------------------------------------------------------

const arr = [1,2,3,4];

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

Output:
10

Explanation:
- reduce() converts an array into a single value.

--------------------------------------------------------
18. Async Function
--------------------------------------------------------

async function test() {
  return 10;
}

test().then(console.log);

Output:
10

Explanation:
- Async functions always return a Promise.

--------------------------------------------------------
19. [] == false
--------------------------------------------------------

console.log([] == false);

Output:
true

Explanation:
- JavaScript performs type coercion.

--------------------------------------------------------
20. Event Loop Order
--------------------------------------------------------

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);

Output:
1
4
3
2

Explanation:
1. Synchronous code executes first.
2. Promise callbacks (Microtasks) execute next.
3. setTimeout callbacks (Macrotasks) execute last.

--------------------------------------------------------
Important Topics
--------------------------------------------------------

✓ var vs let vs const
✓ Hoisting
✓ Closures
✓ Event Loop
✓ Call Stack
✓ Microtask Queue vs Macrotask Queue
✓ Promises
✓ Async/Await
✓ Primitive vs Reference Types
✓ map(), filter(), reduce()
✓ Shallow Copy vs Deep Copy
✓ this keyword
✓ Debouncing
✓ Currying
