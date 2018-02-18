## [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)

Используется в конфигурации:
```json
{ "no-ex-assign": 2 }
```

Запрещает переназначение аргумента ```catch```. 

Посколько альтернативного способа обращения к этим данным не существует, подобные действия могут иметь разрушительные последствия.

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
try {
    // code
} catch (e) {
    e = 10;
}
```

---

Пример __правильного__ кода для этого правила:
```js
try {
    // code
} catch (e) {
    const foo = 10;
}
```

---

### Версия ESLint

Правило было введено в ESLint 0.0.9.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-ex-assign": "error" }
```