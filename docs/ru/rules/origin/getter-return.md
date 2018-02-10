## [getter-return](https://eslint.org/docs/rules/getter-return)

Используется в конфигурации:
```json
{ "getter-return": 2 }
```

Обязывает возвращать значения внутри getter методов.

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
class P{
    get name(){
        // no returns.
    }
}
```

---

Пример __правильного__ кода для этого правила:
```js
class P{
    get name(){
        return "nicholas";
    }
}
```

---

### Версия ESLint

Правило было введено в ESLint 4.2.0.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "getter-return": "off" }