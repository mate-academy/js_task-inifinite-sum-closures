'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  function add(...args) {
    if (args.length === 0) {
      const result = currentSum;
      currentSum = 0; // Очищаємо currentSum при виклику без аргументів
      return result;
    }
    currentSum += args.reduce((acc, current) => acc + current, 0);
    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
