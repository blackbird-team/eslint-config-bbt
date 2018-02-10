## [no-console](https://eslint.org/docs/rules/no-consolen)

Используется в конфигурации:
```ecmascript 6
{ "no-console": 2 }
```

Запрещает вызов методов объекта ```console```. \
_Используем, потому что часто забываем убирать консоли на продакшене_

---

### Examples

Пример __неправильного__ кода для этого правила:
```ecmascript 6
console.log("Log a debug level message.");
console.warn("Log a warn level message.");
console.error("Log an error level message.");
```

---

Пример __правильного__ кода для этого правила:
```ecmascript 6
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

console.warn("Log a warn level message.");
console.error("Log an error level message.");
```

---

### Версия ESLint

Правило было введено в ESLint 0.0.2.

---

### Параметры

 - ```"allow"``` массив, из строчных названий методов, использование которых исключаются из правила.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```ecmascript 6
{ "no-console": "error" }
```