'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const checkingСonditions = (number) => {
    if (number !== undefined) {
      result += number;

      return checkingСonditions;
    } else {
      const saveResult = result;

      result = 0;

      return saveResult;
    }
  };

  return checkingСonditions;
}

module.exports = makeInfinityAdder;
