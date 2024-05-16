'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  return (startValue = 0) => {
    let sum = startValue;

    const adding = (num) => {
      if (num !== undefined) {
        sum += num;

        return adding;
      }

      return sum;
    };

    if (startValue) {
      return adding;
    }

    return sum;
  };
}

module.exports = makeInfinityAdder;
