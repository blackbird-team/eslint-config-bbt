## [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)

Используется в конфигурации:
```json
{ "no-extra-semi": 2 }
```
Запрещает необязательные точки с запятой

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
const x = 5;;

class FooClass {
    // code
};
```

---

Пример __правильного__ кода для этого правила:
```js
const x = 5;

class FooClass {
    // code
}
```

---

### Версия ESLint

Правило было введено в ESLint 0.0.9.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-extra-semi": "error" }
```