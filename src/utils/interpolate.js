import getDividedDiffTable from "./get-table";
import getNodes from "./get-nodes";

const interpolate = (xValues, yValues, n, interpolationX) => {
  const isValidTypes =
    Array.isArray(xValues) &&
    Array.isArray(yValues) &&
    typeof n === "number" &&
    typeof interpolationX === "number";

  if (!isValidTypes) {
    return "Types are invalid, mission abort!!!";
  }

  const sortedX = xValues.sort((a, b) => a - b);

  const isValidData =
    interpolationX > sortedX[0] &&
    interpolationX < sortedX[sortedX.length - 1] &&
    n > -1 &&
    xValues.length === yValues.length &&
    xValues.filter((val) => typeof val === "number").length ===
      xValues.length &&
    yValues.filter((val) => typeof val === "number").length === yValues.length;

  if (!isValidData) {
    return "Data is invalid, mission abort!!!";
  }

  const nodes = getNodes(sortedX, yValues, n, interpolationX);

  if (!nodes) {
    return null;
  }

  const table = getDividedDiffTable(n, nodes.xNodes, nodes.yNodes);
  if (!table) {
    return "Data is invalid, mission abort!!!";
  }

  const getCalculation = (table, xNodes, interpolationX) => {
    let calculation = table[0][0] || 0;
    const xDiffsArr = [];

    table.forEach((el, index) => {
      if (!index) {
        return null;
      }

      if (xNodes.length) {
        xDiffsArr.push(interpolationX - xNodes[index - 1]);
      }

      if (typeof el[0] === "number") {
        calculation += el[0] * xDiffsArr.reduce((prev, curr) => prev * curr, 0);
      } else {
        calculation += xDiffsArr.reduce((prev, curr) => prev * curr, 0);
      }
    });

    // console.log(calculation);
    return calculation;
  };

  return getCalculation(table, nodes.xNodes, interpolationX);
};

export default interpolate;
