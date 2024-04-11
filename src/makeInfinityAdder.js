'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let clearCall = 0;
  let result = 0;

  const adder = (arg) => {
    if (arg === undefined) {
      clearCall++;

      if (clearCall === 1) {
        return result;
      }

      if (clearCall === 2) {
        result = 0;

        return result;
      }
    }

    result += arg;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
