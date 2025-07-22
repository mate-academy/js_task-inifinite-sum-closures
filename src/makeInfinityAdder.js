'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (n) => {
    // Якщо виклик без аргументів - повернути суму і скинути
    if (n === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }

    // Додати число до суми і повернути функцію
    // для подальшого виклику
    sum += n;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
