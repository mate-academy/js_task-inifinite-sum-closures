'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = (n) => {
    if (n) {
      sum += n;

      return add;
    }

    const sumCp = sum;

    sum = 0;

    return sumCp;
  };

  return add;
}

module.exports = makeInfinityAdder;
