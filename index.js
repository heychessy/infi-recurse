exports.infiniteRecursion = function(width, height, padding) {
  if (height < 20 || width < 20 || padding < 4) return false;

  if (height & 1 || width & 1 || padding & 1) return false;

  //create result array and fill with 0s
  let result = [];
  for (let i = 0; i < height; ++i) {
    result[i] = [];
    for (let j = 0; j < width; ++j) {
      result[i][j] = 0;
    }
  }
  let start = 0;
  createMatrix(width, height, padding, start, result);
  return result;
};
function createMatrix(width, height, padding, start, result) {
  //base condition
  if (height - start < padding || width - start < padding) return;
  for (let i = start; i < width; ++i) {
    result[start][i] = 1;

    result[height - 1][i] = 1;
  }
  for (let i = start + 1; i < height - 1; ++i) {
    result[i][start] = 2;
    result[i][width - 1] = 2;
  }

  createMatrix(
    width - padding,
    height - padding,
    padding,
    start + padding / 2 + 1,
    result
  );
}
