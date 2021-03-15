// import data from "./data";

// const { INTERPOLATION_X } = data;

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

  console.log(calculation);
  return calculation;
};

export default getCalculation;
