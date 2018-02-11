## [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)

Используется в конфигурации:
```json
{ "no-constant-condition": 2 }
```

Запрещает использование констант в условных выражениях ```if```, ```for```, ```while```, ```do...while``` и тернарных выражениях ```?:```


---

### Examples

Пример __неправильного__ кода для этого правила:
```js
if (false) {
    doSomethingUnfinished();
}

if (void x) {
    doSomethingUnfinished();
}

for (;-2;) {
    doSomethingForever();
}

while (typeof x) {
    doSomethingForever();
}

do {
    doSomethingForever();
} while (x = -1);

var result = 0 ? a : b;
```

---

Пример __правильного__ кода для этого правила:
```js
if (x === 0) {
    doSomething();
}

for (;;) {
    doSomethingForever();
}

while (typeof x === "undefined") {
    doSomething();
}

do {
    doSomething();
} while (x);

var result = x !== 0 ? a : b;
```

---

### Версия ESLint

Правило было введено в ESLint 0.4.1.

---

### Параметры

 - ```checkLoops``` __boolean__ _default: true_, при значение ```false``` отменяет правило внутри итераций.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-constant-condition": "error" }
```