# eslint-rules-example

## [indent](https://eslint.org/docs/rules/indent)

Правило использования отступов

### По умолчанию:
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/)
```eslint
"indent": "off",
```

[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/8e29a161f91cb0e190ebe3f955073f3c16894d9f/packages/eslint-config-airbnb-base)
```eslint
"indent": ['error', 2, {
    SwitchCase: 1,
    VariableDeclarator: 1,
    outerIIFEBody: 1,
    // MemberExpression: null,
    FunctionDeclaration: {
      parameters: 1,
      body: 1
    },
    FunctionExpression: {
      parameters: 1,
      body: 1
    },
    CallExpression: {
      arguments: 1
    },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoredNodes: ['JSXElement', 'JSXElement *']
  }]
```

### Используемое значение:
[eslint-config-bbt](https://github.com/blackbird-team/eslint-config-bbt)

```eslint
"indent": ["error", "tab", {"SwitchCase": 1}]
```

- В качестве отступов приняты табуляции.
- ```"SwitchCase"``` Определяет размер отступа для ```case``` блоков в ```switch``` выражениях


## Bad practices
```javascript
switch(const){
case: console.log(const); break;
default: 
break;}
```

## Good practices
```javascript
switch(const) {
    case: 
        console.log(const); 
        break;
    default: 
        break;
}
```
