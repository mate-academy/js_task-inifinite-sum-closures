'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const adder = (a) => {
      if (!a && a !== 0) {
        let temp = sum;
        sum = 0;
        return temp;
      }
      sum = sum + a;
      return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
