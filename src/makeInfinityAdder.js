'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let generally = 0;
  const summ = (number) => {
    const emptyCall = number === undefined;

    if (emptyCall) {
      const result = generally;

      generally = 0;

      return result;
    }

    generally += number;

    return summ;
  };

  return summ;
}

module.exports = makeInfinityAdder;
