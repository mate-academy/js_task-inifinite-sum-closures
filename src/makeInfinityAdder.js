'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let result = 0;

  const makeAdd = (a) => {
    if (a !== undefined) {
      result += a;

      return makeAdd;
    }

    const endResult = result;

    result = 0;

    return endResult;
  };

  return makeAdd;
}

module.exports = makeInfinityAdder;
