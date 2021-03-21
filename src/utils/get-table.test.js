/* eslint-env jest */
import getNodes from "./get-nodes";
import getDividedDiffTable from "./get-table";
import testData from "./test-data";

const { X_VALUES, Y_VALUES, n, INTERPOLATION_X, getTableResult } = testData;

const nodes = getNodes(X_VALUES, Y_VALUES, n, INTERPOLATION_X);

const testCases = [
  {
    description: "Return null if there are not enough arguments",
    expected: null,
    actual: getDividedDiffTable(n, nodes.xNodes),
  },
  {
    description: "Return null if one of arguments has incorrect type",
    expected: null,
    actual: getDividedDiffTable(n, nodes.xNodes, {}),
  },
  {
    description:
      "Return null if some of the arrays elements has incorrect type",
    expected: null,
    actual: getDividedDiffTable(
      n,
      [0.3121345, 0.5, 0.67879, "this is string", 0.9],
      nodes.yNodes
    ),
  },
  {
    description: "Return null if n is less than 0",
    expected: null,
    actual: getDividedDiffTable(-5, nodes.xNodes, nodes.yNodes),
  },
  {
    description: "Return correct result if all arguments are correct",
    expected: getTableResult,
    actual: getDividedDiffTable(n, nodes.xNodes, nodes.yNodes),
  },
];

describe("getTable()", () => {
  testCases.forEach((testCase) => {
    test(testCase.description, () => {
      expect(testCase.actual).toEqual(testCase.expected);
    });
  });
});
