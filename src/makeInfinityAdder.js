'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(num) {
  let sum = num || 0;

  function result(nextNum) {
    if (nextNum === undefined) {
      const number = sum; // Сохраняем текущую сумму

      sum = 0; // Сбрасываем сумму после получения результата

      return number;
    }

    sum += nextNum;

    return result;
  }

  return result;
}

module.exports = makeInfinityAdder;
