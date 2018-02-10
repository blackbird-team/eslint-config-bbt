## [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)

Используется в конфигурации:
```json
{ "no-cond-assign": 2 }
```
Запрещает оператор присваивания в условных выражениях ```if```, ```for```, ```while``` и ```do...while```

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
// Unintentional assignment
let x;
if (x = 0) {
    let b = 1;
}
```
```js
// Practical example that is similar to an error
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while (someNode = someNode.parentNode);
}
```

---

Пример __правильного__ кода для этого правила:
```js
// Assignment replaced by comparison
let x;
if (x === 0) {
    let b = 1;
}
```
```js
// Practical example that wraps the assignment in parentheses
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while ((someNode = someNode.parentNode));
}
```
```js
// Practical example that wraps the assignment and tests for 'null'
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while ((someNode = someNode.parentNode) !== null);
}
```

---

### Версия ESLint

Правило было введено в ESLint 0.0.9.

---

### Параметры

 - ```"except-parens"``` _(default)_ разрешает присваивания в условных выражениях, заключенные в круглые скобки (for example, to allow reassigning a variable in the test of a ```while``` or ```do...while``` loop)
 - ```"always"``` запрещает присваивания в любых условных выражениях

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-cond-assign": "error" }
```