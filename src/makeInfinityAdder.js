'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let startValue = 0;

  const adder = (valueFromUser) => {
    if (valueFromUser === undefined) {
      const stopValue = startValue;

      startValue = 0;

      return stopValue;
    }

    startValue += valueFromUser;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
