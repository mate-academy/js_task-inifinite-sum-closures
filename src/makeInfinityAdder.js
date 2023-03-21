'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (a) => {
    if (!a && a !== 0) {
      return 0;
    }

    return (b) => {
      if (!b && b !== 0) {
        return a;
      }

      return (c) => {
        if (!c && c !== 0) {
          return a + b;
        }

        return (d) => {
          if (!d && d !== 0) {
            return a + b + c;
          }

          return (e) => {
            if (!e && e !== 0) {
              return a + b + c + d;
            }

            return (f) => {
              if (!f && f !== 0) {
                return a + b + c + d + e;
              }

              return (g) => {
                if (!g && g !== 0) {
                  return a + b + c + d + e + f;
                }

                return (h) => {
                  if (!h && h !== 0) {
                    return a + b + c + d + e + f + g;
                  }

                  return (i) => {
                    if (!i && i !== 0) {
                      return a + b + c + d + e + f + g + h;
                    }

                    return (j) => {
                      if (!j && j !== 0) {
                        return a + b + c + d + e + f + g + h + i;
                      }

                      return a + b + c + d + e + f + g + h + i + j;
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
