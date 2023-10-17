'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const result = [];

  return function makeInf(param) {
    if (param) {
      result.push(param);

      return makeInf;
    }

    const helper = [...result];

    result.length = 0;

    return helper.reduce((sum, item) => sum + item, 0);
  };
};

module.exports = makeInfinityAdder;
