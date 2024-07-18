'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const infinityAdder = (firstNumber) => {
    const saveResult = [];

    if (firstNumber !== undefined) {
      result += firstNumber;

      return infinityAdder;
    } else {
      saveResult.push(result);

      result = 0;

      return saveResult[0];
    }
  };

  return infinityAdder;
}

module.exports = makeInfinityAdder;
