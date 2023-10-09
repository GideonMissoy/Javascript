// fs module stands for file system, it exports functions for working with files and directories
// The function readfile reads a file and then calls a callback with the file's contents
let {readFile} = require("fs");
readFile("file.txt", "utf8", (error, text) => {
    if (error) throw error;
    console.log("The file contains:", text);
});


const {readFile} = require("fs");
readFile("file.txt", (error, buffer) => {
    if (error) throw error;
    console.log("The file contained", buffer.length, "bytes.",
                "The first byte is:", buffer[0]);
});

//writeFile is used to write a file to disk.
const {writeFile} = require("fs");
writeFile("graffiti.txt", "Node was here", err => {
    if (err) console.log(`Failed to write file: ${err}`);
    else console.log("File written.");
});


const {readFile} = require("fs").promises;
readFile("file.txt", "utf8")
    .then(text => console.log("The file contains:", text));