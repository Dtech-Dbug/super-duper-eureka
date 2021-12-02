# super-duper-eureka 🥳🥳

Again w/ Github's Suggestion. This Repo Has A Module That Sanitizes All English Into The Standard Title Case. Just Like This!

## why though?

this module sanitizes strings in any order and converts it to the standard title case(meaning the first letter of each word is made capital)

You Understood Right? 👀

## setup and installation

- using npm:
  `npm i sanitize-string`

- require in the project:

```js
// commonjs module
const titleCase = require("sanitize-string");

import titleCase from "sanitize-string";
```

### usage:

```js
console.log(titleCase("you know javaScript!"));
//You Know Javascript!

console.log(titleCase("wHat ThE fOrK?"));
//What The Fork?

let sanitizeString = titleCase("aRe yOu fOr ReAL?");
console.log(sanitizeString);
//Are You For Real?
```

### return type

`string`
