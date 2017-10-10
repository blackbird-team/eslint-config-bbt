# eslint-rules-example

##[radix](https://eslint.org/docs/rules/radix)

Предотвращение непреднамеренного преобразования строки

### По умолчанию:
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/)
```eslint
Нет правила
```
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/blob/8e29a161f91cb0e190ebe3f955073f3c16894d9f/packages/eslint-config-airbnb-base/rules/best-practices.js)
```eslint
radix: 'error'
```
### Используемое значение:
[eslint-config-bbt](https://github.com/blackbird-team/eslint-config-bbt)

```eslint
"radix": [2, "as-needed"]
```
- "radix": [2, ...] - сообщать об ошибке;
- "radix": [..., "as-needed"] - запрещает избыточное спользование 10-тиричного литерала

## Bad practices
```javascript
/*eslint radix: ["error", "as-needed"]*/

var num = parseInt("071", 10);

var num = parseInt("071", "abc");

var num = parseInt();
```

## Good practices
```javascript
/*eslint radix: ["error", "as-needed"]*/

var num = parseInt("071");

var num = parseInt("071", 8);

var num = parseFloat(someValue);
```