# Hellish challenge

When the word hell is present in the title of the task, nothing good should be expected.
Let's get down to business. Write the `makeAdder` function, which will return the` adder` function.
The `adder` function should work on the following pattern: `adder(2)(3)(4)(1)(2)(3)(4)() === 19`. It will sum all the numbers passed in the parameters until it encounters a call without parameters. When calling without parameters, it will return the result and clear the amount.

Коли в назві завдання присутне слово пекло, нічого хорошого чукати нше варто.
Приступаємо до справи. Напишіть `makeAdder` функцію, яка повертатиме `adder` функцію.
Функція `adder` має працювати за шаблоном `adder(2)(3)(4)(1)(2)(3)(4)() === 19`.
Він підсомуватиме всі числа, передані в параметрах, доки не зустріне виклик без параметрів.
При виклику без параметрів він поверне результат і очистить суму.

Example:
```
const adder = makeAdder();
adder() === 0
adder(4)(5)() === 9
adder() === 0
adder(5)(5)(5)
adder(4)
adder() === 19
adder() === 0
```


**Read the guideline before start**

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)
