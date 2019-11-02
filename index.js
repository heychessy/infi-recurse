//main function to initiate recursion and return matrix
exports.infiniteRecursion = function(width, height, padding) {
  if (height < 20 || width < 20 || padding < 4) {
    console.log(
      "Specify width, height & padding as integers as per the constraints h>=20, w>=20, p>=4."
    );
    return;
  }
  if (height & 1 || width & 1 || padding & 1) {
    console.log("Specify width, height & padding all shoulb be even.");
    return;
  }

  //create result array and fill with 0s
  let result = [];
  for (let i = 0; i < height; ++i) {
    result[i] = [];
    for (let j = 0; j < width; ++j) {
      result[i][j] = 0;
    }
  }
  let start = 0; //start point of drawing the shape
  createMatrix(width, height, padding, start, result);
  return result;
};

function createMatrix(width, height, padding, start, result) {
  //base condition
  if (height - start < padding || width - start < padding) return;

  //filling the top and bottom side
  for (let i = start; i < width; ++i) {
    result[start][i] = 1;
    result[height - 1][i] = 1;
  }

  //filling the left and right side
  for (let i = start + 1; i < height - 1; ++i) {
    result[i][start] = 2;
    result[i][width - 1] = 2;
  }

  //creating smaller shape with smaller width and height and new starting point
  createMatrix(
    width - padding / 2 - 1,
    height - padding / 2 - 1,
    padding,
    start + padding / 2 + 1,
    result
  );
}
//function that converts matrix to shape
function drawShape(matrix) {
  let string = "";
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] == 1) string += "_";
      if (matrix[i][j] == 0) string += " ";
      if (matrix[i][j] == 2) string += "|";
    }
    string += "\n";
  }
  return string;
}

// taking user inputs from commandline
function main(arguments) {
  if (arguments.length != 3) {
    console.log(
      "Missing arguments please try again!.Sepcify width, height & padding.\nRefer to Readme for more details."
    );
    return;
  }

  let width = parseInt(arguments[0]);
  let height = parseInt(arguments[1]);
  let padding = parseInt(arguments[2]);
  if (
    !Number.isInteger(width) ||
    !Number.isInteger(height) ||
    !Number.isInteger(padding)
  )
    console.log("Specify width, height & padding as integers.");
  else {
    let result = exports.infiniteRecursion(width, height, padding);
    if (result) {
      console.log(drawShape(result));
    }
  }
}

const arguments = process.argv.slice(2);
main(arguments);
