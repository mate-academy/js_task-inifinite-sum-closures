'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const summer = (value) => {
    if (value === undefined) {
      const cashe = sum;

      sum = 0;

      return cashe;
    }

    sum += value;

    return summer;
  };

  return summer;
}

module.exports = makeInfinityAdder;
