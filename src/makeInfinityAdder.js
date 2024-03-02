'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const res = (number) => {
    if (number === undefined) {
      const ress = result;

      result = 0;

      return ress;
    }

    result += number;

    return res;
  };

  return res;
}

module.exports = makeInfinityAdder;
