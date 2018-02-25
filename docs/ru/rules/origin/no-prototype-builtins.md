## [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)

Используется в конфигурации:
```json
{ "no-prototype-builtins": 2 }
```
Запрещает вызов некоторых ```Object.prototype``` методов непосредственно на экземплярах объектов

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
const hasBarProperty = foo.hasOwnProperty("bar");

const isPrototypeOfBar = foo.isPrototypeOf(bar);

const barIsEnumerable = foo.propertyIsEnumerable("bar");
```

---

Пример __правильного__ кода для этого правила:
```js
const hasBarProperty = Object.prototype.hasOwnProperty.call(foo, "bar");

const isPrototypeOfBar = Object.prototype.isPrototypeOf.call(foo, bar);

const barIsEnumerable = {}.propertyIsEnumerable.call(foo, "bar");
```

---

### Версия ESLint

Правило было введено в ESLint 2.11.0.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-prototype-builtins": "off" }
```