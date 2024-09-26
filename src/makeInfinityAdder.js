'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const carrentNum = sum;

      sum = 0;

      return carrentNum;
    } else {
      sum += num;

      return adder;
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
