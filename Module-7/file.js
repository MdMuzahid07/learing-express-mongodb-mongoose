const fs = require("fs");

//reading a file text

const readText = fs.readFileSync("./mytext/read.txt", "utf-8");


// write an text

const write = fs.writeFileSync("./mytext/write.txt", readText + "this is my written text");


console.log(write);

console.log(readText);