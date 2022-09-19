'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let count = 0;

  const makeAdder = (number) => {
    if (number || number === 0) {
      result += number;

      return makeAdder;
    }

    count++;

    if (count % 2 === 0) {
      result = 0;
    }

    return result;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
