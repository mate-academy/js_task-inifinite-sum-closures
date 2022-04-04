'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // Напишите функцию makeAdder, которая вернет функцию сумматора.
  // Функция сумматора должна работать по следующему шаблону:
  // adder(2)(3)(4)(1)(2)(3)(4)() === 19. Она будет суммировать все числа,
  // переданные в параметрах, пока он встречает вызов без параметров.
  // При вызове без параметров вернет результат и очистит сумму.
  let sum = 0;
  const adder = (x) => {
    if (typeof x !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum = sum + x;

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
