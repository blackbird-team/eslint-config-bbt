module.exports = {
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	},
	"rules": {
		"getter-return": 2,
		"no-compare-neg-zero": 1,
		"no-cond-assign": 2,
		"no-console": 2,
		"no-constant-condition": 2,
		"no-control-regex": 1,
		"no-debugger": 2,
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty": 2,
		"no-empty-character-class": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 2,
		"no-extra-boolean-cast": [1, "all", {
			"nestedBinaryExpressions": false
		}]
	}
};