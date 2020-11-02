'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let temp;
  const adder = (param1) => {
    if (param1 !== undefined) {
      sum += param1;

      const helper = (param2) => {
        if (param2 === undefined) {
          temp = sum;
          sum = 0;

          return temp;
        }
        sum += param2;

        return helper;
      };

      return helper;
    }

    temp = sum;
    sum = 0;

    return temp;
  };

  return adder;
}

module.exports = makeInfinityAdder;
