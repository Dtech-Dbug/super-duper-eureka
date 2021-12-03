const titleCase = require("./index");

const testCase1 = titleCase("hAvE fUn");
const testCase2 = titleCase("aRe yOU rEAl?");
const testCase3 = titleCase("wHaT tHe FoRk?");

const testCaseWithSpaces = titleCase("  hello HoW aRE yOu?");

const testCaseEmptyString = "";
// console.log(titleCase("hAve FuN"));

test("sanitized", () => {
  expect(testCase1).toContain("Have Fun");
});

test("Santitize testcase2", () => {
  expect(testCase2).toContain("Are You Real?");
});

test("Santitize testcase3", () => {
  expect(testCase3).toContain("What The Fork");
});

test("Santitize testCaseWithSpace", () => {
  expect(testCaseWithSpaces).toBe("Hello How Are You?");
});

test("Santitize testCaseWithEmptyString", () => {
  expect(testCaseEmptyString).toBe("");
});
