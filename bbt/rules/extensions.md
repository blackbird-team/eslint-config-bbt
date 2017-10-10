# eslint-rules-example

## [import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)

Правило использования окончаний модулей

### По умолчанию:
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/)
```eslint
Нет правила
```
[eslint-config-airbnb-base](https://github.com/airbnb/javascript/blob/8e29a161f91cb0e190ebe3f955073f3c16894d9f/packages/eslint-config-airbnb-base/rules/imports.js)
```eslint
'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
    }]
```

### Используемое значение:
[eslint-config-bbt](https://github.com/blackbird-team/eslint-config-bbt)

```eslint
"import/extensions": 0
```

- Отключение ошибок окончаний модулей с использованием [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)

## Bad practices 
```javascript
import foo from './foo.js';

import bar from './bar.json';

import Component from './Component.jsx'

import express from 'express/index.js';
```

## Good practices
```javascript
import foo from './foo';

import bar from './bar';

import Component from './Component'

import express from 'express/index';

import * as path from 'path';
```
