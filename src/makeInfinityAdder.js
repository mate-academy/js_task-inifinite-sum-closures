'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = [];

  const getAdder = (atribute) => {
    if (atribute === undefined) {
      const sumOfAdder
        = adder.reduce((accumulator, current) => accumulator + current, 0);

      adder.length = 0;

      return sumOfAdder;
    } else {
      adder.push(atribute);

      return getAdder;
    }
  };

  return getAdder;
}

module.exports = makeInfinityAdder;
