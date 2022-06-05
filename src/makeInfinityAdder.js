'use strict';

/***
 *  Когда в названии задания присутствует слово ад,
 * ничего хорошего ждать не стоит.
 *  Давайте приступим к делу. Напишите функцию makeAdder,
 *  которая вернет функцию adder.
 *  Функция adder должна работать по следующему шаблону:
 *  adder(2)(3)(4)(1)(2)(3)(4)() === 19.
 *  Она будет суммировать все числа, переданные в параметрах,
 *  пока он встречает вызов без параметров.
 *  При вызове без параметров вернет результат и очистит сумму.
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
