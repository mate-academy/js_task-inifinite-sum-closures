'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0; // Скидаємо суму після повернення результату

      return result;
    }

    sum += args.reduce((acc, num) => acc + num, 0);

    return adder; // Повертаємо функцію для підтримки ланцюжкових викликів
  }

  return adder;
}

module.exports = makeInfinityAdder;
