'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const infinityAdder = function(a) {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += a;

    return function(b) {
      if (b === undefined) {
        const result = sum;

        sum = 0;

        return result;
      }

      sum += b;

      return function(c) {
        if (c === undefined) {
          const result = sum;

          sum = 0;

          return result;
        }

        sum += b;

        return function(i) {
          if (i === undefined) {
            const result = sum;

            sum = 0;

            return result;
          }

          sum += i;

          return function(j) {
            if (j === undefined) {
              const result = sum;

              sum = 0;

              return result;
            }

            sum += j;

            return function(k) {
              if (k === undefined) {
                const result = sum;

                sum = 0;

                return result;
              }

              sum += k;

              return function(l) {
                if (l === undefined) {
                  const result = sum;

                  sum = 0;

                  return result;
                }

                sum += l;

                return function(m) {
                  if (m === undefined) {
                    const result = sum;

                    sum = 0;

                    return result;
                  }

                  sum += m;

                  return function(n) {
                    if (n === undefined) {
                      const result = sum;

                      sum = 0;

                      return result;
                    }

                    sum += n;
                  };
                };
              };
            };
          };
        };
      };
    };
  };

  return infinityAdder;
}

module.exports = makeInfinityAdder;
