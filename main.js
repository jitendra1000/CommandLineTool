/*var command = process.argv[2];
var title = process.argv[3];
console.log(process.argv);

if (command === "add") {
  console.log("add new node");
} else if (command === "list") {
  console.log("Listing");
} else if (command === "read") {
  console.log("Reading");
} else if (command === "remove") {
  console.log("Removing");
} else {
  console.log("command not recog");
}*/

///Input with Yargs
//const _ = require("lodash");
const yargs = require("yargs");
const curd = require("./curd");
var argv = yargs.argv;
var command = argv._[0];
var title = argv.title;
console.log(command);
console.log(argv);
console.log(title);

if (command === "add") {
  curd.add(title);
} else if (command === "list") {
  curd.getAll(title);
} else if (command === "read") {
  console.log("Reading");
} else if (command === "remove") {
  curd.remove(title);
} else {
  console.log("command not recog");
}
