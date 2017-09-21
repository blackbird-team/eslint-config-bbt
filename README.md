# eslint-config-bbt
ESLint Config for JavaScript used by BlackBird Team

## Install
```cmd
npm install --save-dev eslint eslint-config-bbt
```

```cmd
npm i -D eslint-config-bbt
```

## Usage
```eslint
{
	...
	"extends": [ "bbt" ]
	...
}
```

## Includes

[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)

[eslint-config-airbnb-base](https://github.com/airbnb/javascript)

[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

[babel-eslint](https://github.com/babel/babel-eslint)

```eslint
	"extends": [ "airbnb-base", "prettier" ]
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	}
```

## Custom Rules

#### [indent](https://eslint.org/docs/rules/indent)
```eslint
"indent": ["error", "tab", {"SwitchCase": 1}]
```

#### [import/no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)
```eslint
"import/no-unresolved": "off"
```

#### [import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)
```eslint
"import/extensions": "off"
```

#### [linebreak-style](https://eslint.org/docs/rules/linebreak-style)
```eslint
"linebreak-style": "off"
```

#### [radix](https://eslint.org/docs/rules/radix)
```eslint
"radix": ["error", "as-needed"]
```