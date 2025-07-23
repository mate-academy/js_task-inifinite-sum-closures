'use strict';

/***
 * @return {function}
 */
/* eslint no-console: ["error", { allow: ["log"] }] */
function makeAdder() {
  let totalResult = 0;

  const sum = (a) => {
    if (a === undefined) {
      const localResult = totalResult;

      totalResult = 0;

      return localResult;
    }

    totalResult += a;

    return sum;
  };

  return sum;
}

module.exports = makeAdder;
