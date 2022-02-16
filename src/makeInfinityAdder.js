'use strict';
// const add = (val) => (val ? (arg) => (arg ? add(val + arg) : val) : 0)
/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = number => {
    if (number === undefined) {
      const sumTemp = sum;

      sum = 0;

      return sumTemp;
    }

    sum += number;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
