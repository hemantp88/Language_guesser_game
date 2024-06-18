const franc = require("franc");
const langs = require("langs")

// console.log(franc("Hello World"));
const input = process.argv[2];
const key = (franc(input));
const language = langs.where("3", key);
console.log(language.name);