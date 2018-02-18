## [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)

Используется в конфигурации:
```json
{ "no-duplicate-case": 2 }
```

Запрещает дублирование выражений ```case``` внутри ```switch``` 

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
switch (a) {
    case "1":
        break;
    case "2":
        break;
    case "1":         // duplicate test expression
        break;
    default:
        break;
}
```

---

Пример __правильного__ кода для этого правила:
```js
switch (a) {
    case "1":
        break;
    case "2":
        break;
    case "3":
        break;
    default:
        break;
}
```

---

### Версия ESLint

Правило было введено в ESLint 0.17.0.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-duplicate-case": "error" }
```