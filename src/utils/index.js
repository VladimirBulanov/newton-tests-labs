// const data = require('./data')
const testData = require("./test-data");
const getCalculation = require("./calculation");
const getDividedDiffTable = require("./get-table");
const getNodes = require("./get-nodes");

const { X_VALUES, Y_VALUES, INTERPOLATION_X } = testData;

// вывод начальных данных
const printInitial = (sortedX, yValues, n, interpolationX) => {
  console.log(
    "Исходные данные: \n ",
    "Значения X: \n",
    sortedX.join(", "),
    "\n Значения Y: \n",
    yValues.join(", "),
    "\n Степень полинома n: \n",
    n,
    "\n Значение X: \n",
    interpolationX
  );
};

const interpolate = (xValues, yValues, n, interpolationX) => {
  const isValidTypes =
    Array.isArray(xValues) &&
    Array.isArray(yValues) &&
    typeof n === "number" &&
    typeof interpolationX === "number";

  if (!isValidTypes) {
    throw new Error("Types are invalid, mission abort!!!");
  }

  const isValidData =
    xValues.length === yValues.length &&
    xValues.filter((val) => typeof val === "number").length ===
      xValues.length &&
    yValues.filter((val) => typeof val === "number").length === yValues.length;

  if (!isValidData) {
    throw new Error("Data is invalid, mission abort!!!");
    return null;
  }

  const sortedX = xValues.sort((a, b) => a - b);

  printInitial(sortedX, yValues, n, interpolationX);

  const nodes = getNodes(sortedX, yValues, n, interpolationX);

  if (!nodes) {
    return null;
  }

  console.log("Nodes: \n", nodes);

  const table = getDividedDiffTable(n, nodes.xNodes, nodes.yNodes);

  console.log("Divided diff table: \n", table);

  return getCalculation(table, nodes.xNodes);
};

// Вывод результатов расчетов для каждого n
for (let i = 0; i < 5; i++) {
  console.log(
    `Результат при n=${i}: \n`,
    interpolate(X_VALUES, Y_VALUES, i, INTERPOLATION_X),
    "\n\n\n"
  );
}

console.log(
  "Результат при обратной интерполяции: \n",
  interpolate(Y_VALUES, X_VALUES, 5, 0)
);
