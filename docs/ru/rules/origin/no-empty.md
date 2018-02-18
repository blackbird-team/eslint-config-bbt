## [no-empty](https://eslint.org/docs/rules/no-empty)

Используется в конфигурации:
```json
{ "no-empty": 2 }
```

Запрещает пустые блоки кода

---

### Examples

Пример __неправильного__ кода для этого правила:
```js

if (foo) {
}

while (foo) {
}

switch(foo) {
}

try {
    doSomething();
} catch(ex) {

} finally {

}
```

---

Пример __правильного__ кода для этого правила:
```js
if (foo) {
    // empty
}

while (foo) {
    /* empty */
}

try {
    doSomething();
} catch (ex) {
    // continue regardless of error
}

try {
    doSomething();
} finally {
    /* continue regardless of error */
}
```

---

### Версия ESLint

Правило было введено в ESLint 0.0.2.

---

### Параметры

 - ```"allowEmptyCatch": true``` - разрешает пустые блоки ```catch```

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-empty": "error" }
```