module.exports = function towelSort (matrix) {
  let arr = [];
  if (!matrix) {
    return arr
  }
  matrix.map((el,i) => {
    i % 2 === 0 ? el : el.reverse()
  })
  return matrix.flat()
}

