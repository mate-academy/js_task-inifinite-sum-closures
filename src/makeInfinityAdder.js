'use strict';

/***
 *Коли в назві завдання присутнє слово "пекло",
  нічого доброго чекати не варто.
  Давайте приступимо до роботи.
  Напишіть функцію makeAdder,
  яка буде повертати функцію додавання.
  Функція додавання повинна працювати за наступним зразком:
  adder(2)(3)(4)(1)(2)(3)(4)() === 19.
  Вона буде підсумовувати всі числа, передані у параметрах,
  поки не зустріне виклик без параметрів.
  При виклику без параметрів вона поверне результат і очистить суму.

Приклад:

const adder = makeAdder();
adder() === 0
adder(4)(5)() === 9
adder() === 0
adder(5)(5)(5)(5)
adder(4)
adder() === 19
adder() === 0

Translated with DeepL.com (free version)
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here

  let sum = 0;

  return function add(a) {
    if (a !== undefined) {
      sum += a;

      return add;
    }

    const result = sum;

    sum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
