'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const recursion = (num) => {
    if (typeof num === 'number') {
      sum += num;

      return recursion;
    } else {
      const sumForReturn = sum;

      sum = 0;

      return sumForReturn;
    }
  };

  return recursion;
}

module.exports = makeInfinityAdder;
