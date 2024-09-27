'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;
  let clear = false;

  const adder = (number) => {
    if (clear) {
      result = 0;
      clear = false;
    }

    if (typeof number !== 'number') {
      clear = true;

      return result;
    }

    result += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
