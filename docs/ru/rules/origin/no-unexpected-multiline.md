## [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)

Используется в конфигурации:
```json
{ "no-unexpected-multiline": 2 }
```
Запрещает запутывание многострочных выражений, в которых новая строка выглядит так, как будто она завершает оператор, но это не так.

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
const foo = bar
(1 || 2).baz();

const hello = 'world'
[1, 2, 3].forEach(addNumber);

const x = () => {}
`hello`

const x = () => {}
x
`hello`

let x = foo
/regex/g.test(bar)
```

---

Пример __правильного__ кода для этого правила:
```js
const foo = bar;
(1 || 2).baz();
```

---

### Версия ESLint

Правило было введено в ESLint 0.24.0.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-unexpected-multiline": "error" }
```