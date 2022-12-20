'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let numbers = [];

  const iterate = (figure) => {
    if (figure !== undefined) {
      numbers.push(figure);

      return iterate;
    } else {
      const allNumbers = [...numbers];
      const endResult = allNumbers.reduce((sum, number) => sum + number, 0);

      numbers = [];

      return endResult;
    }
  };

  return iterate;
}

module.exports = makeInfinityAdder;
