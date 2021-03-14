const getDividedDiff = require('./get-divided-diff')

// Цикл для построения таблицы
const getDividedDiffTable = (n, xNodes, yNodes) => {
  if (!n) {
    return [yNodes]
  }

  const table = []
  for (let i = 0; i < n; i++) {
    // предыдущая колонка
    const prev = table[i - 1] || yNodes
    // мапим предыдущую колонку
    const thisCol = prev
      .map((el, index, arr) => {
        if (index === arr.length - 1) {
          return
        }
        const y0 = el
        const x0 = xNodes[index]

        const y1 = arr[index + 1]
        const x1 = xNodes[index + 1]

        return getDividedDiff(x0, x1, y0, y1)
      })
      .filter((el) => !!el)
    table.push(thisCol)
  }

  table.unshift(yNodes)
  return table
}

module.exports = getDividedDiffTable
