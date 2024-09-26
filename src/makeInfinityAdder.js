'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let acumValue = 0;

  return function adder(value) {
    if (value !== undefined) {
      acumValue += value;

      return adder;
    }

    const savedAcum = acumValue;

    acumValue = 0;

    return savedAcum;
  };
}

module.exports = makeInfinityAdder;
