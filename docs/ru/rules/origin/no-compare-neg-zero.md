## [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)

Используется в конфигурации:
```ecmascript 6
{ "no-compare-neg-zero": 1 }
```

Предупреждает о сравнении с ```-0```, поскольку подобное условие возвратит ```true``` и для ```-0```, и для ```-0```.

---

### Examples

Пример __неправильного__ кода для этого правила:
```ecmascript 6
if (x === -0) {
    // doSomething()...
}
```

---

Пример __правильного__ кода для этого правила:
```ecmascript 6
if (x === 0) {
    // doSomething()...
}
```
```ecmascript 6
if (Object.is(x, -0)) {
    // doSomething()...
}
```

---

### Версия ESLint

Правило было введено в ESLint 3.17.0.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```ecmascript 6
{ "no-compare-neg-zero": "error" }
```