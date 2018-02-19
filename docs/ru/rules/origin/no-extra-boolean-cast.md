## [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)

Используется в конфигурации:
```json
{ "no-extra-boolean-cast": 2 }
```

Запрещает лишние логические операторы ```!``` 

В таких контекстах, как например ```if```, где результат выражения уже будет преобразован к типу ```Boolean```,
дополнительное явное преобразование двойным вызовом оператора ```!!``` или конструктором ```Boolean``` излишне.

---

### Examples

Пример __неправильного__ кода для этого правила:
```js
const foo = !!!bar;
const foo = Boolean(!!bar);
```

---

Пример __правильного__ кода для этого правила:
```js
const foo = !!bar;
const foo = Boolean(bar);
```

---

### Версия ESLint

Правило было введено в ESLint 0.4.0.

---

### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-extra-boolean-cast": "error" }
```