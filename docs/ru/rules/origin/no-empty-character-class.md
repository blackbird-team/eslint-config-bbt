## [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)

Используется в конфигурации:
```json
{ "no-empty-character-class": 2 }
```

Запрещает пустые символьные классы в регулярных выражениях.

Поскольку пустые классы символов в регулярных выражениях не соответствуют чему-либо, они могут быть причиной ошибки.

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
/^abc[]/.test("abcdefg"); // false
"abcdefg".match(/^abc[]/); // null
```

---

Пример __правильного__ кода для этого правила:
```js
/^abc/.test("abcdefg"); // true
"abcdefg".match(/^abc/); // ["abc"]

/^abc[a-z]/.test("abcdefg"); // true
"abcdefg".match(/^abc[a-z]/); // ["abcd"]
```

---

### Версия ESLint

Правило было введено в ESLint 0.22.0.

---

### Известные ограничения

Это правило не определяет пустые классы символов в строчном аргументе вызова ```RegExp``` конструктора.

Пример _ложного положительного_ срабатывания правила:
```js
const abcNeverMatches = new RegExp("^abc[]");
```

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-empty-character-class": "error" }
```