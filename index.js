function titleCase(str) {
  const arrOfStrings = str.trim().split(" ");
  let casingWords;
  let cased = "";

  for (let i of arrOfStrings) {
    // uppercase the first index and lowercase the rest for each words
    casingWords = i[0].toUpperCase() + i.slice(1).toLowerCase();

    cased += casingWords + " ";
  }

  return cased;
}

let test = titleCase("hEy ArE");
console.log(test);
module.exports = titleCase;
