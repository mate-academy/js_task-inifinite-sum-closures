'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (num) => {
    if (typeof num !== 'number') {
      result = 0;

      return result;
    }

    const add = (number) => {
      result += num;

      if (typeof number !== 'number') {
        return result;
      }

      return adder(number);
    };

    return add;
  };

  return adder;
};

module.exports = makeInfinityAdder;
