# Базовые правила ESLint 
	
[for-direction](https://eslint.org/docs/rules/for-direction) -- Отключено. Для циклов используем [lodash](https://www.npmjs.com/package/lodash)

[getter-return](/docs/ru/rules/origin/getter-return.md) -- ```"error"``` -- Обязывает возвращать значения внутри getter методов.

[no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop) -- Отключено. 

[no-compare-neg-zero](/docs/ru/rules/origin/no-compare-neg-zero.md) -- ```"warn"``` -- Предупреждает о сравнении с ```-0```.

[no-cond-assign](/docs/ru/rules/origin/no-cond-assign.md) -- ```"error"``` -- Запрещает оператор присваивания в условных выражениях ```if```, ```for```, ```while``` и ```do...while```.

[no-console](/docs/ru/rules/origin/no-console.md) -- ```"error"``` -- Запрещает вызов методов объекта ```console```.

[no-constant-condition](/docs/ru/rules/origin/no-constant-condition.md) -- ```"error"``` -- Запрещает использование констант в условных выражениях ```if```, ```for```, ```while```, ```do...while``` и тернарных выражениях ```?:```.

[no-control-regex](/docs/ru/rules/origin/no-control-regex.md) -- ```"warn"``` -- Предупреждает о наличии "невидимых символов" ASCII 0-31.

[no-debugger](/docs/ru/rules/origin/no-debugger.md) -- ```"error"``` -- Запрещает вызов отладчика ```debugger```.

[no-dupe-args](/docs/ru/rules/origin/no-dupe-args.md) -- ```"error"``` -- Запрещает дублирование имен для аргументов.

[no-dupe-keys](/docs/ru/rules/origin/no-dupe-keys.md) -- ```"error"``` -- Запрещает дублирование имен для свойств объектов.

[no-duplicate-case](/docs/ru/rules/origin/no-duplicate-case.md) -- ```"error"``` -- Запрещает дублирование выражений ```case``` внутри ```switch``` 

[no-empty](/docs/ru/rules/origin/no-empty.md) -- ```"error"``` -- Запрещает пустые блоки кода

[no-empty-character-class](/docs/ru/rules/origin/no-empty-character-class.md) -- ```"error"``` -- Запрещает пустые символьные классы в регулярных выражениях

[no-ex-assign](/docs/ru/rules/origin/no-ex-assign.md) -- ```"error"``` -- Запрещает переназначение аргумента ```catch```

[no-extra-boolean-cast](/docs/ru/rules/origin/no-extra-boolean-cast.md) -- ```"error"``` -- Запрещает лишние логические операторы ```!```

[no-extra-parens](/docs/ru/rules/origin/no-extra-parens.md) -- ```[ "warn", "all", { "nestedBinaryExpressions": false } ]``` -- Ограничивает использование круглых скобок, кроме тех мест, где они необходимы

[no-extra-semi](/docs/ru/rules/origin/no-extra-semi.md) -- ```"error"``` -- Запрещает необязательные точки с запятой

[no-func-assign](https://eslint.org/docs/rules/no-func-assign) -- Отключено. Запрещает переназначение переменных Function Declaration. Всегда используем Function Expression

[no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations) -- Отключено. Запрещает объявление функций и переменных во вложенных блоках. Устарело для ES6 

[no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp) -- Отключено. _Рассмотрение правил для ```RegEx``` отложено_

[no-irregular-whitespace](/docs/ru/rules/origin/.md) -- ```"error"``` -- Запрещает недопустимые символы пробелов

[no-obj-calls](/docs/ru/rules/origin/no-obj-calls.md) -- ```"error"``` -- Запрещает вызово объектов ```Math```, ```JSON``` и ```Reflect``` в качестве функций

[no-prototype-builtins](/docs/ru/rules/origin/no-prototype-builtins.md) -- ```"error"``` -- Запрещает вызов некоторых ```Object.prototype``` методов непосредственно на экземплярах объектов
