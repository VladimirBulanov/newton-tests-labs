const getDividedDiff = (x0, x1, y0, y1) => {
  return (y0 - y1) / (x0 - x1);
};

// Цикл для построения таблицы
const getDividedDiffTable = (n, xNodes, yNodes) => {
  const isValidData =
    typeof n === "number" &&
    n > -1 &&
    xNodes &&
    xNodes.length &&
    yNodes &&
    yNodes.length &&
    xNodes.filter((val) => typeof val === "number").length === xNodes.length &&
    yNodes.filter((val) => typeof val === "number").length === yNodes.length;

  if (!isValidData) {
    return null;
  }

  const table = [];
  for (let i = 0; i < n; i++) {
    // предыдущая колонка
    const prev = table[i - 1] || yNodes;
    // мапим предыдущую колонку
    const thisCol = prev
      .map((el, index, arr) => {
        if (index === arr.length - 1) {
          return;
        }
        const y0 = el;
        const x0 = xNodes[index];

        const y1 = arr[index + 1];
        const x1 = xNodes[index + 1];

        return getDividedDiff(x0, x1, y0, y1);
      })
      .filter((el) => !!el);
    table.push(thisCol);
  }

  table.unshift(yNodes);
  return table;
};

export default getDividedDiffTable;
