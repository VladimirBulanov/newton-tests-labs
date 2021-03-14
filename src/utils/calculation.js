import data from "./data";

const { INTERPOLATION_X } = data;

const getCalculation = (table, xNodes) => {
  let calculation = table[0][0];
  const xDiffsArr = [];

  table.forEach((el, index) => {
    if (!index) {
      return null;
    }
    xDiffsArr.push(INTERPOLATION_X - xNodes[index - 1]);
    calculation += el[0] * xDiffsArr.reduce((prev, curr) => prev * curr);
  });

  console.log(calculation);
  return calculation;
};

export default getCalculation;
