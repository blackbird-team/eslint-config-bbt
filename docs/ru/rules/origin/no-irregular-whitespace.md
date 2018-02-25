## [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)

Используется в конфигурации:
```json
{ "no-irregular-whitespace": 2 }
```

Это правило предназначено для обнаружения недопустимых символов пробелов, которые не являются обычной табуляцией или пробелом. 
Некоторые из этих символов могут вызывать проблемы в современных браузерах, а другие - проблему отладки.

---

### Дополнительные сведения

Запрещает следующие символы, если не включены опции правила:
```
\u000B - Line Tabulation (\v) - <VT>
\u000C - Form Feed (\f) - <FF>
\u00A0 - No-Break Space - <NBSP>
\u0085 - Next Line
\u1680 - Ogham Space Mark
\u180E - Mongolian Vowel Separator - <MVS>
\ufeff - Zero Width No-Break Space - <BOM>
\u2000 - En Quad
\u2001 - Em Quad
\u2002 - En Space - <ENSP>
\u2003 - Em Space - <EMSP>
\u2004 - Tree-Per-Em
\u2005 - Four-Per-Em
\u2006 - Six-Per-Em
\u2007 - Figure Space
\u2008 - Punctuation Space - <PUNCSP>
\u2009 - Thin Space
\u200A - Hair Space
\u200B - Zero Width Space - <ZWSP>
\u2028 - Line Separator
\u2029 - Paragraph Separator
\u202F - Narrow No-Break Space
\u205f - Medium Mathematical Space
\u3000 - Ideographic Space
```

---

### Examples

Пример __неправильного__ кода для этого правила:
```js

function thing() /*<NBSP>*/{
    return 'test';
}

function thing( /*<NBSP>*/){
    return 'test';
}

function thing /*<NBSP>*/(){
    return 'test';
}

function thing᠎/*<MVS>*/(){
    return 'test';
}

function thing() {
    return 'test'; /*<ENSP>*/
}

function thing() {
    return 'test'; /*<NBSP>*/
}

function thing() {
    // Description <NBSP>: some descriptive text
}

/*
Description <NBSP>: some descriptive text
*/

function thing() {
    return / <NBSP>regexp/;
}

/*eslint-env es6*/
function thing() {
    return `template <NBSP>string`;
}
```

---

Пример __правильного__ кода для этого правила:
```js
function thing() {
    return ' <NBSP>thing';
}

function thing() {
    return '​<ZWSP>thing';
}

function thing() {
    return 'th <NBSP>ing';
}
```

---

### Версия ESLint

Правило было введено в ESLint 0.9.0.

---

### Параметры

Объектного вида для исключения:

- ```"skipStrings": true``` - _(по умолчанию)_ - позволяет любые пробельные символы в строковых литералах
- ```"skipComments": true``` - разрешает любые символы пробелов в комментариях
- ```"skipRegExps": true``` - true разрешает любые пробельные символы в литералах регулярного выражения
- ```"skipTemplates": true``` - разрешает любые пробельные символы в шаблонных литералах
### Extends

[eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js)
```json
{ "no-irregular-whitespace": "error" }
```