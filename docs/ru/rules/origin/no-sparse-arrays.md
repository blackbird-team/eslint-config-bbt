## [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)

Используется в конфигурации:
```json
{ "no-sparse-arrays": 2 }
```
Запрещает sparse arrays. Игнорирует trailing comma 

---

### Дополнительные сведения

[JavaScript: sparse arrays vs. dense arrays](http://2ality.com/2012/06/dense-arrays.html)

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
const items = [,];
const colors = [ "red",, "blue" ];
```

---

Пример __правильного__ кода для этого правила:
```js
const items = [];
const items = new Array(23);

// trailing comma (after the last element) is not a problem
const colors = [ "red", "blue", ];
```

---

### Версия ESLint

Правило было введено в ESLint 0.4.0.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-sparse-arrays": "error" }
```