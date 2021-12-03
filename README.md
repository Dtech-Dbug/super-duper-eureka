# super-duper-eureka 🥳🥳

Again w/ Github's Suggestion. This Repo Has A Module That Sanitizes All English Into The Standard Title Case. Just Like This!

## why though?

this module sanitizes strings in any order and converts it to the standard title case(meaning the first letter of each word is made capital)

You Understood Right? 👀

## setup and installation

- using npm:
  `npm i super-duper-eureka`

- require in the project:

```js
// commonjs module
const titleCase = require("super-duper-eureka");

import titleCase from "super-duper-eureka";
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
