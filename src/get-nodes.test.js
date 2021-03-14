/* eslint-env jest */
const getNodes = require("./get-nodes");
const {
  X_VALUES,
  Y_VALUES,
  n,
  INTERPOLATION_X,
  getNodesResult,
} = require("./test-data");

const testCases = [
  {
    description: "Return null if there are not enough arguments",
    expected: null,
    actual: getNodes(X_VALUES, Y_VALUES),
  },
  {
    description: "Return null if one of arguments has incorrect type",
    expected: null,
    actual: getNodes(X_VALUES, {}, n, INTERPOLATION_X),
  },
  {
    description:
      "Return null if some of the arrays elements has incorrect type",
    expected: null,
    actual: getNodes(
      X_VALUES,
      [1, 2, 3, "i am a string", 4],
      n,
      INTERPOLATION_X
    ),
  },
  {
    description: "Return null if interpolation X is out of range",
    expected: null,
    actual: getNodes(X_VALUES, Y_VALUES, n, 123456789),
  },
  {
    description: "Return null if arrays have different length",
    expected: null,
    actual: getNodes(X_VALUES, [Y_VALUES[0]], n, INTERPOLATION_X),
  },
  {
    description: "Return null if n is less than 0",
    expected: null,
    actual: getNodes(X_VALUES, Y_VALUES, -5, INTERPOLATION_X),
  },
  {
    description: "Return correct result if all arguments are correct",
    expected: getNodesResult,
    actual: getNodes(X_VALUES, Y_VALUES, n, INTERPOLATION_X),
  },
];

describe("getNodes()", () => {
  testCases.forEach((testCase) => {
    test(testCase.description, () => {
      expect(testCase.actual).toEqual(testCase.expected);
    });
  });
});
