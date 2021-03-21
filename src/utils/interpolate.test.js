/* eslint-env jest */
import interpolate from "./interpolate";
import testData from "./test-data";

const {
  X_VALUES,
  Y_VALUES,
  n,
  INTERPOLATION_X,
  interpolateResult,
  errors,
} = testData;

const testCases = [
  {
    description: "Return null if there are not enough arguments",
    expected: errors.TYPES,
    actual: interpolate(X_VALUES, Y_VALUES, n),
  },
  {
    description: "Return null if one of arguments has incorrect type",
    expected: errors.TYPES,
    actual: interpolate(X_VALUES, Y_VALUES, n, {}),
  },
  {
    description:
      "Return null if some of the arrays elements has incorrect type",
    expected: errors.DATA,
    actual: interpolate(
      X_VALUES,
      [1, 0.8381, 0.636, "this is string", 0.236, -0.131, -0.2, -0.5],
      n,
      INTERPOLATION_X
    ),
  },
  {
    description: "Return null if n is less than 0",
    expected: errors.DATA,
    actual: interpolate(X_VALUES, Y_VALUES, -5, INTERPOLATION_X),
  },
  {
    description: "Return null if interpolation X is out of range",
    expected: errors.DATA,
    actual: interpolate(X_VALUES, Y_VALUES, n, 123456789),
  },
  {
    description: "Return correct result if all arguments are correct",
    expected: interpolateResult,
    actual: interpolate(X_VALUES, Y_VALUES, n, INTERPOLATION_X),
  },
];

describe("getTable()", () => {
  testCases.forEach((testCase) => {
    test(testCase.description, () => {
      expect(testCase.actual).toEqual(testCase.expected);
    });
  });
});
