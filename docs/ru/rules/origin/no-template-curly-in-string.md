## [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)

Используется в конфигурации:
```json
{ "no-template-curly-in-string": 2 }
```
Предупреждает об использовании синтаксиса шаблонных строк, заключенные в отличимые от обратных кавычки

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
"Hello ${name}!";
'Hello ${name}!';
"Time: ${12 * 60 * 60 * 1000}";
```

---

Пример __правильного__ кода для этого правила:
```js
`Hello ${name}!`;
`Time: ${12 * 60 * 60 * 1000}`;
```

---

### Версия ESLint

Правило было введено в ESLint 3.3.0.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-template-curly-in-string": "off" }
```