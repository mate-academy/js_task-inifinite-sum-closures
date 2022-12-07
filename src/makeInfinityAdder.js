'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  if (arguments.length === 0) {
    return 0;
  }

  const add = (element) => {
    if (element === undefined) {
      return sum;
    }

    sum += element;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
