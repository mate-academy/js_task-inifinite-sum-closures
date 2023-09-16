'use strict';

/**
 * @return {function} */
function makeInfinityAdder() {
  const augend = [0, 0];

  const adder = (addend) => {
    if (typeof addend === 'number') {
      augend[0] += addend;

      return adder;
    }

    augend[1] = augend[0];
    augend[0] = 0;

    return augend[1];
  };

  return adder;
}

module.exports = makeInfinityAdder;
