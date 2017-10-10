# eslint-rules-example

## [linebreak-style](https://eslint.org/docs/rules/linebreak-style)

Игнорирование кодировки разрыва строки в различных ОС.

### По умолчанию:
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/)
```eslint
Нет правила
```
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/blob/8e29a161f91cb0e190ebe3f955073f3c16894d9f/packages/eslint-config-airbnb-base/rules/imports.js)
```eslint
linebreak-style': ['error', 'unix']
```
### Используемое значение:
[eslint-config-bbt](https://github.com/blackbird-team/eslint-config-bbt)

```eslint
"linebreak-style": 0
```

## Bad practices 
```javascript
/*eslint linebreak-style: ["error", "unix"]*/

var a = 'a'; // \r\n
```

## Good practices
```javascript
/*eslint linebreak-style: ["error", "unix"]*/

var a = 'a', // \n
    b = 'b'; // \n
// \n
function foo(params) { // \n
    // do stuff \n
}// \n
```