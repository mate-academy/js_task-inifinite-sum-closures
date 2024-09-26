'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let summOfAllValue = 0;

  const adder = (numberToAdd) => {
    if (numberToAdd === undefined) {
      const bufNumber = summOfAllValue;

      summOfAllValue = 0;

      return bufNumber;
    }

    summOfAllValue += numberToAdd;

    return (otherNumberToAdd) => adder(otherNumberToAdd);
  };

  return adder;
}

module.exports = makeInfinityAdder;
