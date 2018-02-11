## [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)

Используется в конфигурации:
```json
{ "no-dupe-args": 2 }
```

Запрещает дублирование имен для аргументов.

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
const bar = (a, b, a) => {
    console.log("value of the second a:", a);
};
```

---

Пример __правильного__ кода для этого правила:
```js
const bar = (a, b, c) => {
    console.log(a, b, c);
};
```

---

### Версия ESLint

Правило было введено в ESLint 0.16.0.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-dupe-args": "error" }
```