function titleCase(str) {
  if (str === "") return new Error("Pass it a string");

  // TODO: else
  const arrOfStrings = str.trim().split(" ");
  let casingWords;
  let cased = "";

  for (let i of arrOfStrings) {
    // uppercase the first index and lowercase the rest for each words
    casingWords = i[0].toUpperCase() + i.slice(1).toLowerCase();

    cased += casingWords + " ";
  }

  return cased.trimEnd();
}

let test = titleCase("");
console.log(test);
module.exports = titleCase;
