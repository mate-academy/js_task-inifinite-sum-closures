'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const chainedSummarizer = (...args) => {
    const actualResult = result;

    if (args.length === 0) {
      result = 0;

      return actualResult;
    }

    result += args.reduce((prev, arg) => prev + arg, 0);

    return chainedSummarizer;
  };

  return chainedSummarizer;
}

module.exports = { makeInfinityAdder };
