const getAllNameLengths = require("./index.js");
const studentData = require("../students/index.js");

test("should be an array of numbers indicating the length of each name", () => {
  expect(getAllNameLengths(studentData)).toEqual([
    12,
    14,
    12,
    13,
    14,
    11,
    15,
    16,
    21,
    13,
    13,
    13,
    15,
    15,
    14,
    16,
    12,
    10,
    13,
    13,
    12,
    16,
    10,
    14,
    13,
    16,
    16,
    15,
    8,
    16,
    15,
    13,
    15,
    14,
    14,
    12,
    15,
    16,
    10,
    11,
    12,
    17,
    17,
    12,
    14,
    14,
    15,
    12,
    14,
    8,
  ]);
});