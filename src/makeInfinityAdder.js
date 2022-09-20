'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let startValue = 0;

  const adder = (valueFromUser) => {
    if (valueFromUser === undefined) {
      startValue = 0;

      return startValue;
    }

    return (nextValueFromUser) => {
      if (nextValueFromUser === undefined) {
        startValue = 0;

        return valueFromUser;
      }

      startValue = valueFromUser + nextValueFromUser;

      return adder(startValue);
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
