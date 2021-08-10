'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  const values = [];
  let sumOfValues = 0;

  const adder = function(value) {
    if (value !== undefined) {
      values.push(value);
      sumOfValues = values.reduce((accumulator, item) => accumulator + item, 0);

      return adder;
    } else {
      const sumOfValuesToReturn = sumOfValues;

      sumOfValues = 0;

      return sumOfValuesToReturn;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
