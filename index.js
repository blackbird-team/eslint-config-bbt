module.exports = {
	"extends": ["airbnb-base", "prettier"],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module"
	},
	"rules": {
		"indent": [2, "tab", {"SwitchCase": 1}],
		"import/no-unresolved": 0,
		"import/extensions": 0,
		"linebreak-style": 0,
		"radix": [2, "as-needed"]
	}
};