## [getter-return](https://eslint.org/docs/rules/getter-return)

Используется в конфигурации:
```ecmascript 6
{ "getter-return": 2 }
```

Обязывает возвращать значения внутри getter методов.

---

Пример __неправильного__ кода для этого правила:
```ecmascript 6
class P{
    get name(){
        // no returns.
    }
}
```

---

Пример __правильного__ кода для этого правила:
```ecmascript 6
class P{
    get name(){
        return "nicholas";
    }
}
```

---

__Версия ESLint__

Правило было введено в ESLint 4.2.0.