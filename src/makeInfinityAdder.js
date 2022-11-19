'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result;

  return (a = undefined) => {
    result = a;

    if (a === undefined) {
      result = 0;

      return result;
    }

    const secondFunc = (b = undefined) => {
      if (b === undefined) {
        return result;
      } else {
        result += b;

        return secondFunc;
      }
    };

    return secondFunc;
  };
}

module.exports = makeInfinityAdder;
