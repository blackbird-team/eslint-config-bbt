## [no-unreachable](https://eslint.org/docs/rules/no-unreachable)

Используется в конфигурации:
```json
{ "no-unreachable": 2 }
```
Запрещает код после ```return```, ```throw```, ```continue```, and ```break```, которіе будет проигнорирован интерпретатором 

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
function foo() {
    return true;
    console.log("done");
}

function bar() {
    throw new Error("Oops!");
    console.log("done");
}

while(value) {
    break;
    console.log("done");
}

throw new Error("Oops!");
console.log("done");
```

---

Пример __правильного__ кода для этого правила:
```js
function foo() {
    return bar();
    function bar() {
        return 1;
    }
}
```

---

### Версия ESLint

Правило было введено в ESLint 0.0.6.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-unreachable": "error" }
```