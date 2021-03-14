import getCalculation from "./calculation";
import getDividedDiffTable from "./get-table";
import getNodes from "./get-nodes";

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
  }

  const sortedX = xValues.sort((a, b) => a - b);

  const nodes = getNodes(sortedX, yValues, n, interpolationX);

  if (!nodes) {
    return null;
  }

  console.log("Nodes: \n", nodes);

  const table = getDividedDiffTable(n, nodes.xNodes, nodes.yNodes);

  console.log("Divided diff table: \n", table);

  return getCalculation(table, nodes.xNodes);
};

export default interpolate;
