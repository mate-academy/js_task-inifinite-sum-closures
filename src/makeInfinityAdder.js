'use strict';

/**
 * @return {function} */
function makeInfinityAdder() {
  const augend = [0, 0];

  const summer = (addend) => {
    if (addend !== undefined) {
      augend[0] += addend;

      return summer;
    }

    augend[1] = augend[0];
    augend[0] = 0;

    return augend[1];
  };

  return summer;
}

module.exports = makeInfinityAdder;
