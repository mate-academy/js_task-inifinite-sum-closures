'use strict';

function makeInfinityAdder() {
  let acamulatorSum = 0;

  const getSum = function(value) {
    if (value === undefined) {
      const resultSum = acamulatorSum;

      acamulatorSum = 0;

      return resultSum;
    }
    acamulatorSum += value;

    return getSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
