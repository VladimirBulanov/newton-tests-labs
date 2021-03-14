// функция для поиска и получения узлов
const getNodes = (xValues, yValues, n, interpolationX) => {
  const isValidTypes =
    Array.isArray(xValues) &&
    Array.isArray(yValues) &&
    typeof n === "number" &&
    typeof interpolationX === "number";

  if (!isValidTypes) {
    return null;
  }

  if (n < 0) {
    return null;
  }

  const isValidData =
    xValues.length === yValues.length &&
    xValues.filter((val) => typeof val === "number").length ===
      xValues.length &&
    yValues.filter((val) => typeof val === "number").length === yValues.length;

  if (!isValidData) {
    return null;
  }

  const rootElementIndex = xValues.findIndex((el) => el >= interpolationX);

  if (rootElementIndex === -1) {
    return null;
  }

  const nodesCount = n + 1;

  const startingElementIndex =
    rootElementIndex + Math.floor(nodesCount / 2) > xValues.length
      ? xValues.length - nodesCount - 1
      : rootElementIndex - Math.floor(nodesCount / 2) || 0;

  return {
    xNodes: xValues.slice(
      startingElementIndex,
      startingElementIndex + nodesCount
    ),
    yNodes: yValues.slice(
      startingElementIndex,
      startingElementIndex + nodesCount
    ),
  };
};

module.exports = getNodes;
