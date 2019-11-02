const assert = require("assert");
const helper = require("../index.js");
const fs = require("fs");
let rawData = fs.readFileSync("new_testdata.json");
let testData = JSON.parse(rawData);
describe("Testing infinite recursion", function() {
  let input = testData[0].input.split(",");
  let width = input[0];
  let height = input[1];
  let padding = input[2];
  it(`Testing with width=${width}, height=${height}, padding=${padding} `, function() {
    let matrix = helper.infiniteRecursion(width, height, padding);
    assert.equal(matrix.toString(), JSON.parse(testData[0].pixelArrayJson));
  });
});
