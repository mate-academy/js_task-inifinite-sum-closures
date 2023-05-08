'use strict';

/***
 * Коли в назві завдання присутне слово пекло, нічого хорошого чукати нше варто.
  Приступаємо до справи. Напишіть `makeAdder` функцію,
  яка повертатиме `adder` функцію.
  Функція`adder` має працювати за шаблоном`adder(2)(3)(4)(1)(2)(3)(4)() === 19`.
  Він підсомуватиме всі числа, передані в параметрах,
  доки не зустріне виклик без параметрів.
  При виклику без параметрів він поверне результат і очистить суму.
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...nums) {
    if (nums.length === 0) {
      const resultSum = sum;

      sum = 0;

      return resultSum;
    }

    sum += nums.reduce((total, elem) => total + elem);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
