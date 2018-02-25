## [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)

Используется в конфигурации:
```json
{ "no-obj-calls": 2 }
```
Запрещает вызово объектов ```Math```, ```JSON``` и ```Reflect``` в качестве функций

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
const math = Math();
const json = JSON();
const reflect = Reflect();
```

---

Пример __правильного__ кода для этого правила:
```js
const area = r => {
    return Math.PI * r * r;
}
const object = JSON.parse("{}");
const value = Reflect.get({ x: 1, y: 2 }, "x");
```

---

### Версия ESLint

Правило было введено в ESLint 0.0.9.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-obj-calls": "error" }
```