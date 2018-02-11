## [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)

Используется в конфигурации:
```json
{ "no-dupe-keys": 2 }
```

Запрещает дублирование имен для свойств объектов.

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
const foo = {
    bar: "baz",
    bar: "qux"
};

const foo = {
    "bar": "baz",
    bar: "qux"
};

const foo = {
    0x1: "baz",
    1: "qux"
};
```

---

Пример __правильного__ кода для этого правила:
```js
const foo = {
  bar: "baz",
  quxx: "qux"
};
```

---

### Версия ESLint

Правило было введено в ESLint 0.0.9.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-dupe-keys": "error" }
```