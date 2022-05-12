'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  let counter = 0;

  const adder = (num) => {
    if (num === undefined && counter === 0) {
      counter++;

      return sum;
    } else if (counter > 0) {
      return 0;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
