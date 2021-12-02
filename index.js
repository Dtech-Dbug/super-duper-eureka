function titleCase(str) {
  const arrOfStrings = str.split(" ");
  let casingWords;
  let cased = "";

  for (let i of arrOfStrings) {
    // uppercase the first index and lowercase the rest for each words
    casingWords = i[0].toUpperCase() + i.slice(1).toLowerCase();

    cased += casingWords + " ";
  }

  return cased;
}

// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("I'm A little tea pot"));

console.log(titleCase("you know javaScript!"));
console.log(titleCase("wHat ThE fOrK?"));
console.log(titleCase("aRe yOu fOr ReAL?"));
