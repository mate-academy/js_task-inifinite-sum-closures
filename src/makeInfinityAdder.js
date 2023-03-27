'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let itsFirstCall = true;

  const adder = num => {
    if (num === undefined && itsFirstCall) {
      itsFirstCall = false;
      sum = 0;

      return sum;
    }

    if (num === undefined) {
      itsFirstCall = true;

      return sum;
    }

    itsFirstCall = false;
    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
