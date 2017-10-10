# eslint-rules-example

## [import/no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)

Правило проверяющее подключения модулей

### По умолчанию:
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/)
```eslint
Нет правила
```

[eslint-config-airbnb-base](https://github.com/airbnb/javascript/blob/8e29a161f91cb0e190ebe3f955073f3c16894d9f/packages/eslint-config-airbnb-base/rules/imports.js)
```eslint
'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }]
```

### Используемое значение:
[eslint-config-bbt](https://github.com/blackbird-team/eslint-config-bbt)

```eslint
"import/no-unresolved": 0
```

- Отключение ошибок импорта с использованием [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)

## Bad practices
```javascript
import Config from './../../../data/Config.json'
```

## Good practices
```javascript
import Config from '~/Config.json';
const Config = require('~/Config.json');
```