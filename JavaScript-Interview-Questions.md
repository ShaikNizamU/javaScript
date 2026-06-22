# JavaScript Quiz - Complete Answers & Explanations

---

## Q1: var with setTimeout

```javascript
function q1() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
```

**Output:** `4, 4, 4`

**Explanation:**
- `var` is **function-scoped**, not block-scoped
- After the loop completes, `i` equals `4` (loop ends when i <= 3 is false)
- All three `setTimeout` callbacks are registered but execute AFTER the loop finishes
- When they execute, they all reference the same `i` variable, which is now `4`
- This is a classic closure problem with `var`

---

## Q2: let with setTimeout

```javascript
function q2() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
```

**Output:** `1, 2, 3`

**Explanation:**
- `let` is **block-scoped** - each iteration creates a NEW binding of `i`
- Each `setTimeout` callback closes over its OWN `i` value
- The callbacks capture different values: first has i=1, second has i=2, third has i=3
- This is the correct way to use `var` with `setTimeout` or use the `let` keyword

---

## Q3: Promise vs setTimeout

```javascript
function q3() {
  console.log("Start");

  setTimeout(() => {
    console.log("Timeout");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Promise");
  });

  console.log("End");
}
```

**Output:** `Start, End, Promise, Timeout`

**Explanation:**
- **Synchronous code** runs first → "Start", "End"
- **Microtasks** (Promises, queueMicrotask) run next → "Promise"
- **Macrotasks** (setTimeout, setInterval) run last → "Timeout"
- This demonstrates the **Event Loop**: Call Stack → Microtask Queue → Macrotask Queue

---

## Q4: Nested setTimeout

```javascript
function q4() {
  console.log("A");

  setTimeout(() => {
    console.log("B");

    setTimeout(() => {
      console.log("C");
    }, 0);

  }, 0);

  console.log("D");
}
```

**Output:** `A, D, B, C`

**Explanation:**
- Synchronous logs execute first → "A", "D"
- First `setTimeout` callback executes → "B"
- The nested `setTimeout` inside the first one registers and executes → "C"
- The nested setTimeout has to wait for its parent setTimeout to complete and then queue again

---

## Q5: Array Reference

```javascript
function q5() {
  let a = [1, 2, 3];
  let b = a;

  b.push(4);

  console.log(a);
  console.log(b);
}
```

**Output:** `[1, 2, 3, 4], [1, 2, 3, 4]`

**Explanation:**
- Arrays are **reference types** in JavaScript
- `b = a` doesn't create a copy; it makes `b` reference the SAME array object as `a`
- When you modify through `b`, you're modifying the original array
- Both variables point to identical memory location

---

## Q6: typeof null

```javascript
function q6() {
  console.log(typeof null);
}
```

**Output:** `"object"`

**Explanation:**
- This is a famous **JavaScript quirk** and bug from the language's early design
- `null` was originally represented as a null pointer (0x00 in memory)
- The type-checking code would see the zero pointer and classify it as "object"
- It was never fixed to maintain backward compatibility
- Correct check: `value === null`

---

## Q7: == vs ===

```javascript
function q7() {
  console.log(1 == "1");
  console.log(1 === "1");
}
```

**Output:** `true, false`

**Explanation:**
- **`==` (loose equality)**: Performs **type coercion**
  - `1 == "1"` → "1" is converted to number 1 → `true`
- **`===` (strict equality)**: NO type coercion, checks type AND value
  - `1 === "1"` → different types (number vs string) → `false`
- **Best practice**: Always use `===` to avoid unexpected behavior

---

## Q8: var Hoisting

```javascript
function q8() {
  console.log(a);

  var a = 10;
}
```

**Output:** `undefined`

**Explanation:**
- `var` declarations are **hoisted** to the top of their function scope
- The code is interpreted as:
  ```javascript
  function q8() {
    var a;           // Declaration is hoisted (no value)
    console.log(a);  // undefined - variable exists but has no value
    a = 10;          // Assignment happens here
  }
  ```
- Declaration is hoisted, but initialization is NOT
- The variable exists in the scope but hasn't been assigned yet

---

## Q9: let Hoisting

```javascript
function q9() {
  console.log(a);

  let a = 10;
}
```

**Output:** `ReferenceError: Cannot access 'a' before initialization`

**Explanation:**
- `let` is also hoisted but enters the **Temporal Dead Zone (TDZ)**
- TDZ is the period between entering scope and reaching the declaration
- Accessing a variable in TDZ throws a ReferenceError
- `let` declarations are "hoisted" but not initialized
- This is safer than `var` as it catches accidental use of uninitialized variables

---

## Q10: Object Reference

```javascript
function q10() {
  let obj1 = {
    name: "John"
  };

  let obj2 = obj1;

  obj2.name = "Peter";

  console.log(obj1.name);
}
```

**Output:** `Peter`

**Explanation:**
- Objects are **reference types**
- `obj2 = obj1` makes both variables point to the SAME object in memory
- Modifying through `obj2` affects the original object referenced by `obj1`
- Both variables reference the same object, so they share the same properties

---

## Q11: Primitive Values

```javascript
function q11() {
  let a = 10;
  let b = a;

  b = 20;

  console.log(a);
  console.log(b);
}
```

**Output:** `10, 20`

**Explanation:**
- Primitive values (numbers, strings, booleans) are **copied by value**
- `b = a` creates a COPY of the value, not a reference
- Changing `b` doesn't affect `a` because they're separate values
- This is the opposite behavior of reference types (arrays, objects)

---

## Q12: typeof NaN

```javascript
function q12() {
  console.log(typeof NaN);
}
```

**Output:** `"number"`

**Explanation:**
- **NaN stands for "Not-a-Number"** but ironically is of type `"number"`
- This is a historical quirk in JavaScript's design
- `NaN` is the result of invalid mathematical operations: `0/0`, `parseInt("abc")`, etc.
- Check for NaN using: `Number.isNaN(value)` or `isNaN(value)` (with caution on type coercion)
- Note: `NaN == NaN` returns `false` and `NaN === NaN` returns `false`

---

## Q13: null vs undefined

```javascript
function q13() {
  console.log(null == undefined);
  console.log(null === undefined);
}
```

**Output:** `true, false`

**Explanation:**
- **`==` (loose equality)**: `null` and `undefined` are considered **equal** by design
  - They both represent "no value" or "absence of value"
  - `true` because they coerce to the same thing
- **`===` (strict equality)**: They are **different types**
  - `null` is of type "object", `undefined` is of type "undefined"
  - `false` because types don't match
- Only these two are equal with `==`, nothing else

---

## Q14: Closure

```javascript
function q14() {
  function outer() {
    let count = 0;

    return function () {
      count++;
      console.log(count);
    };
  }

  const increment = outer();

  increment();
  increment();
  increment();
}
```

**Output:** `1, 2, 3`

**Explanation:**
- A **closure** is a function that has access to variables from its outer scope
- `outer()` returns an anonymous function that "closes over" the `count` variable
- Even after `outer()` finishes executing, the returned function retains access to `count`
- Each call to `increment()` accesses the SAME `count` variable, incrementing it
- This demonstrates how closures can create private state/variables

---

## Q15: map()

```javascript
function q15() {
  const arr = [1, 2, 3];

  const result = arr.map(x => x * 2);

  console.log(result);
}
```

**Output:** `[2, 4, 6]`

**Explanation:**
- `map()` **transforms each element** and returns a NEW array
- It doesn't modify the original array
- The callback function is called for each element with (element, index, array)
- Returns: element * 2 for each element
- Perfect for data transformation

---

## Q16: filter()

```javascript
function q16() {
  const arr = [1, 2, 3, 4];

  const result = arr.filter(x => x % 2 === 0);

  console.log(result);
}
```

**Output:** `[2, 4]`

**Explanation:**
- `filter()` returns a NEW array with elements that **pass the test**
- The callback should return `true` or `false`
- `x % 2 === 0` checks if x is even
- Only elements where the callback returns `true` are included
- Doesn't modify the original array

---

## Q17: reduce()

```javascript
function q17() {
  const arr = [1, 2, 3, 4];

  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  console.log(sum);
}
```

**Output:** `10`

**Explanation:**
- `reduce()` **accumulates a single value** from all array elements
- Parameters: `(accumulator, currentValue, index, array)`
- Initial value: `0` (starts accumulator at 0)
- Iteration 1: acc=0, curr=1 → 0+1 = 1
- Iteration 2: acc=1, curr=2 → 1+2 = 3
- Iteration 3: acc=3, curr=3 → 3+3 = 6
- Iteration 4: acc=6, curr=4 → 6+4 = 10
- Returns the final accumulated value

---

## Q18: Async Function

```javascript
function q18() {
  async function test() {
    return 10;
  }

  test().then(console.log);
}
```

**Output:** `10`

**Explanation:**
- An `async` function **always returns a Promise**
- When you `return 10` from an async function, it wraps it in `Promise.resolve(10)`
- `.then(console.log)` waits for the promise and logs the resolved value
- Even if there's no `await` inside, the return value is wrapped in a Promise
- This is why you can use `.then()` on async functions

---

## Q19: [] == false

```javascript
function q19() {
  console.log([] == false);
}
```

**Output:** `true`

**Explanation:**
- This involves multiple steps of **type coercion**:
  - `[] == false`
  - Array `[]` converts to primitive: `[].toString()` → `""`
  - Empty string `""` is falsy, coerces to `0` in numeric context
  - `false` coerces to `0`
  - `0 == 0` → `true`
- This is why `== false` comparisons can be dangerous!

---

## Q20: Event Loop Order

```javascript
function q20() {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  }, 0);

  Promise.resolve().then(() => {
    console.log(3);
  });

  console.log(4);
}
```

**Output:** `1, 4, 3, 2`

**Explanation:**
- **Phase 1 - Call Stack (Synchronous):**
  - Execute `console.log(1)` → "1"
  - Register setTimeout (macrotask)
  - Register Promise (microtask)
  - Execute `console.log(4)` → "4"
- **Phase 2 - Microtask Queue:**
  - Execute Promise callbacks → "3"
- **Phase 3 - Macrotask Queue:**
  - Execute setTimeout → "2"
- Order: **Sync → Microtasks → Macrotasks**

---

## Q21: Type Coercion with Arrays and Objects

```javascript
function q21() {
  console.log([] + []);
  console.log([] + {});
  console.log({} + []);
}
```

**Output:** `"", "[object Object]", 0`

**Explanation:**
- **`[] + []`:**
  - `[].toString()` → `""`
  - `"" + ""` → `""`
  - Result: empty string

- **`[] + {}`:**
  - `[].toString()` → `""`
  - `({}).toString()` → `"[object Object]"`
  - `"" + "[object Object]"` → `"[object Object]"`
  - Result: "[object Object]"

- **`{} + []`:**
  - `{}` is interpreted as a **code block**, not an object literal!
  - The statement becomes: `(code block); +[]`
  - `+[]` is the unary plus operator converting array to number
  - `[].valueOf().toString()` → `""`
  - `+"" ` → `0`
  - Result: 0

---

## Q22: Boolean Arithmetic

```javascript
function q22() {
  console.log(true + true);
  console.log(true + false);
  console.log(false + false);
}
```

**Output:** `2, 1, 0`

**Explanation:**
- **Booleans coerce to numbers in arithmetic operations:**
  - `true` → `1`
  - `false` → `0`
- `true + true` → `1 + 1` → `2`
- `true + false` → `1 + 0` → `1`
- `false + false` → `0 + 0` → `0`

---

## Q23: String Arithmetic

```javascript
function q23() {
  console.log("5" - 2);
  console.log("5" + 2);
}
```

**Output:** `3, "52"`

**Explanation:**
- **Subtraction (`-`) forces numeric coercion:**
  - `"5" - 2` → `5 - 2` → `3`
  - String is converted to number
  
- **Addition (`+`) forces string concatenation:**
  - `"5" + 2` → `"5" + "2"` → `"52"`
  - Number is converted to string
  - Addition operator favors string concatenation!

---

## Q24: Loose Equality with false

```javascript
function q24() {
  console.log(0 == false);
  console.log("" == false);
  console.log(null == false);
}
```

**Output:** `true, true, false`

**Explanation:**
- **`0 == false`:** `true`
  - `false` coerces to `0`
  - `0 == 0` → `true`
  
- **`"" == false`:** `true`
  - Empty string is falsy
  - `false` coerces to `0`
  - `""` coerces to `0`
  - `0 == 0` → `true`
  
- **`null == false`:** `false`
  - `null` only equals `null` and `undefined` with `==`
  - Special case! Not equal to `false`

---

## Q25: Unary Plus Operator

```javascript
function q25() {
  console.log(+"10");
  console.log(+"abc");
}
```

**Output:** `10, NaN`

**Explanation:**
- The unary **`+` operator attempts to convert to a number**
- **`+"10"`:**
  - String "10" is valid number format
  - Converts to numeric `10`
  
- **`+"abc"`:**
  - String "abc" cannot be converted to a valid number
  - Returns `NaN` (Not-a-Number)

---

## Q26: Comparison Chaining

```javascript
function q26() {
  console.log(1 < 2 < 3);
  console.log(3 > 2 > 1);
}
```

**Output:** `true, false`

**Explanation:**
- **Comparison is LEFT-ASSOCIATIVE** (evaluates left to right)

- **`1 < 2 < 3`:**
  - `(1 < 2)` → `true` (boolean)
  - `true < 3` → coerce `true` to `1` → `1 < 3` → `true`
  - Result: `true`

- **`3 > 2 > 1`:**
  - `(3 > 2)` → `true` (boolean)
  - `true > 1` → coerce `true` to `1` → `1 > 1` → `false`
  - Result: `false`

---

## Q27: TDZ with let

```javascript
function q27() {
  let x = 10;

  function test() {
    console.log(x);

    let x = 20;
  }

  test();
}
```

**Output:** `ReferenceError: Cannot access 'x' before initialization`

**Explanation:**
- The inner `let x = 20` creates a **new binding in the function scope**
- This puts `x` in the **Temporal Dead Zone (TDZ)** from the start of the function
- When trying to `console.log(x)` before the `let` declaration is reached, it throws an error
- Even though outer scope has `x = 10`, the inner declaration shadows it and causes TDZ error
- `let` doesn't just use outer scope x; the local declaration prevents it

---

## Q28: Object Reference Copy

```javascript
function q28() {
  const obj = {
    a: 1,
    b: 2
  };

  const copy = obj;

  copy.a = 100;

  console.log(obj.a);
}
```

**Output:** `100`

**Explanation:**
- **Objects are reference types - assignment creates a reference, not a copy**
- `copy = obj` makes both variables point to the SAME object
- Modifying `copy.a` modifies the same object that `obj` references
- Both variables reference the same location in memory
- To create a true copy, use: `const copy = {...obj}` or `Object.assign({}, obj)`

---

## Q29: Array Type Checking

```javascript
function q29() {
  console.log(typeof []);
  console.log(Array.isArray([]));
}
```

**Output:** `"object", true`

**Explanation:**
- **`typeof []`:**
  - Returns `"object"` because arrays are objects in JavaScript
  - `typeof` is not a reliable way to check for arrays
  
- **`Array.isArray([])`:**
  - Returns `true` - this is the **correct way** to check if something is an array
  - Works even with objects from other contexts/iframes
  - Preferred method for array type checking

---

## Q30: NaN Equality

```javascript
function q30() {
  console.log(NaN == NaN);
  console.log(NaN === NaN);
}
```

**Output:** `false, false`

**Explanation:**
- **NaN is NOT equal to itself** - unique behavior in JavaScript!
- `NaN == NaN` → `false`
- `NaN === NaN` → `false`
- This is by specification: NaN represents undefined numerical result
- **Correct way to check for NaN:**
  - `Number.isNaN(value)`
  - `isNaN(value)` (with caution - does type coercion)
  - `Object.is(value, NaN)`

---

## Q31: Array Identity

```javascript
function q31() {
  console.log([] === []);
}
```

**Output:** `false`

**Explanation:**
- **Each `[]` creates a NEW array object in memory**
- `===` checks both value AND reference equality for objects
- Two different array objects are NOT the same reference
- Even if they contain identical elements: `[1] === [1]` → `false`
- They have different memory addresses, so strict equality fails
- This is true for all reference types (objects, functions, arrays)

---

## Q32: Array to String Coercion

```javascript
function q32() {
  console.log([1, 2] == "1,2");
}
```

**Output:** `true`

**Explanation:**
- **With `==`, array coerces to string:**
  - `[1, 2]` converts to `"1,2"` using `toString()`
  - `"1,2" == "1,2"` → `true`
- Array's default `toString()` joins elements with commas
- This is why `[1] == "1"` → `true`
- Loose equality with arrays can be deceiving!

---

## Q33: Boolean Coercion

```javascript
function q33() {
  console.log(Boolean(" "));
  console.log(Boolean(""));
}
```

**Output:** `true, false`

**Explanation:**
- **In JavaScript, strings are truthy or falsy:**
  - **Truthy:** Non-empty strings (including strings with whitespace)
  - **Falsy:** Empty string `""`
  
- **`Boolean(" ")`:**
  - A space is still a character; non-empty string
  - Result: `true`
  
- **`Boolean("")`:**
  - Empty string is one of JavaScript's falsy values
  - Result: `false`
  
- **Other falsy values:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

---

## Q34: String/Number Coercion

```javascript
function q34() {
  console.log(10 + "20");
  console.log("10" - 5);
}
```

**Output:** `"1020", 5`

**Explanation:**
- **Addition operator (`+`) favors string concatenation:**
  - `10 + "20"` → `"10" + "20"` → `"1020"`
  - Number is converted to string
  
- **Subtraction operator (`-`) forces numeric coercion:**
  - `"10" - 5` → `10 - 5` → `5`
  - String is converted to number
  
- **Why the difference?** 
  - `+` is used for both addition and concatenation, so string wins
  - `-` is only for math, so numeric conversion happens

---

## Q35: typeof with Primitives and Functions

```javascript
function q35() {
  console.log(typeof undefined);
  console.log(typeof function () {});
}
```

**Output:** `"undefined", "function"`

**Explanation:**
- **`typeof undefined`:**
  - `undefined` is its own type
  - Returns `"undefined"`
  
- **`typeof function () {}`:**
  - Functions are objects, but `typeof` has special case for functions
  - Returns `"function"` instead of `"object"`
  - Functions are callable objects with special behavior
  
- **typeof return values:** "undefined", "boolean", "number", "string", "bigint", "symbol", "object", "function"

---

## Q36: Spread Operator with Arrays

```javascript
function q36() {
  let a = [1, 2];
  let b = [...a];

  b.push(3);

  console.log(a);
  console.log(b);
}
```

**Output:** `[1, 2], [1, 2, 3]`

**Explanation:**
- **Spread operator `[...]` creates a SHALLOW copy**
- `b = [...a]` creates a new array with the same elements
- `b` and `a` are now **different array objects** in memory
- Modifying `b` does NOT affect `a`
- This is the correct way to copy an array
- Note: shallow copy means nested objects are still referenced

---

## Q37: Object Spread Operator

```javascript
function q37() {
  const obj = {
    name: "John"
  };

  const copy = { ...obj };

  copy.name = "Peter";

  console.log(obj.name);
  console.log(copy.name);
}
```

**Output:** `John, Peter`

**Explanation:**
- **Object spread `{...}` creates a SHALLOW copy**
- `copy = {...obj}` creates a new object with same properties
- `copy` and `obj` are different objects in memory
- Modifying `copy.name` doesn't affect the original `obj.name`
- This is the proper way to copy an object without mutation
- Again, this is a shallow copy (nested objects are still references)

---

## Q38: Default Parameters

```javascript
function q38() {
  function test(a, b = 5) {
    return a + b;
  }

  console.log(test(10));
}
```

**Output:** `15`

**Explanation:**
- **Default parameters** allow you to specify default values
- Syntax: `function test(a, b = 5)`
- When `b` is not provided, it defaults to `5`
- `test(10)` → `a = 10`, `b = 5` (default) → `10 + 5 = 15`
- Default parameters only apply when the argument is `undefined`
- Default is NOT applied for `null` or `false` (only for missing/undefined)

---

## Q39: Type Coercion in Addition

```javascript
function q39() {
  console.log(2 + true);
  console.log(2 + null);
  console.log(2 + undefined);
}
```

**Output:** `3, 2, NaN`

**Explanation:**
- **Addition coerces values to numbers:**
  
- **`2 + true`:**
  - `true` coerces to `1`
  - `2 + 1 = 3`
  
- **`2 + null`:**
  - `null` coerces to `0`
  - `2 + 0 = 2`
  
- **`2 + undefined`:**
  - `undefined` doesn't have a numeric coercion (not `0`)
  - `2 + NaN = NaN`
  - Result: `NaN`

---

## Q40: Array Length Property

```javascript
function q40() {
  const arr = [1, 2, 3];

  arr.length = 1;

  console.log(arr);
}
```

**Output:** `[1]`

**Explanation:**
- **The `length` property of arrays can be set directly**
- When you set `arr.length = 1`, it **truncates the array** to that length
- All elements beyond the new length are removed
- Original array: `[1, 2, 3]`
- After `arr.length = 1`: `[1]` (elements at indices 1 and 2 are removed)
- This is a way to clear or resize arrays
- Setting `arr.length = 0` clears the entire array

---

## Key Takeaways & Best Practices

### 1. **Scope & Hoisting**
- Use `let`/`const` instead of `var` (block-scoped, no quirks)
- Be aware of Temporal Dead Zone with `let`

### 2. **Type Coercion**
- Always use `===` instead of `==`
- Be explicit about type conversions
- Understand falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`

### 3. **Reference vs Primitive**
- **Primitives** (number, string, boolean, null, undefined): copied by value
- **References** (arrays, objects): copied by reference
- Use spread operator `[...arr]` or `{...obj}` for shallow copies

### 4. **Event Loop**
- Synchronous code → Microtasks (Promise) → Macrotasks (setTimeout)
- Promises execute before setTimeout
- Understand callback queue and task queue

### 5. **Closures**
- Functions retain access to outer scope variables
- Useful for private state and data encapsulation
- Common pattern with callbacks and returns

### 6. **Array Methods**
- `map()`: transform elements, return new array
- `filter()`: select elements based on condition, return new array
- `reduce()`: accumulate into single value
- All return new arrays (don't mutate original)

### 7. **typeof Quirks**
- `typeof null` → `"object"` (bug)
- `typeof []` → `"object"` (use `Array.isArray()`)
- `typeof NaN` → `"number"` (quirk)
- `typeof undefined` → `"undefined"` (only way to check)

### 8. **Equality**
- `NaN` is not equal to itself (even with `===`)
- `null == undefined` (true), but `null === undefined` (false)
- `0 == false`, `"" == false`, but `null != false`

### 9. **Async/Promises**
- `async` functions always return Promises
- Use `.then()` to handle resolved values
- Promises are microtasks, execute before setTimeout

### 10. **Mutation & Immutability**
- Be careful with reference types when mutating
- Use spread operator for non-destructive updates
- Prefer immutable patterns in modern JavaScript
