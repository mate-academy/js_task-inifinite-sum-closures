'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const check = (item) => {
    if (!item) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += item;
  };

  return (a) => {
    if (!a) {
      return check();
    }

    sum += a;

    return (b) => {
      if (!b) {
        return check();
      }

      sum += b;

      return (c) => {
        if (!c) {
          return check();
        }

        sum += c;

        return (d) => {
          if (!d) {
            return check();
          }

          sum += d;

          return (e) => {
            if (!e) {
              return check();
            }

            sum += e;

            return (f) => {
              if (!f) {
                return check();
              }

              sum += f;

              return (g) => {
                if (!g) {
                  return check();
                }

                sum += g;

                return (h) => {
                  if (!h) {
                    return check();
                  }

                  sum += h;

                  return (i) => {
                    if (!i) {
                      return check();
                    }

                    sum += i;
                  };
                };
              };
            };
          };
        };
      };
    };
  };
}

module.exports = makeInfinityAdder;
