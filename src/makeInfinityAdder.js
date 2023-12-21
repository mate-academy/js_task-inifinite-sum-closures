'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const addFunc = (number) => {
    if (number === undefined) {
      const tempResult = result;

      result = 0;

      return tempResult;
    }

    result += number;

    return addFunc;
  };

  return addFunc;
}

module.exports = makeInfinityAdder;
