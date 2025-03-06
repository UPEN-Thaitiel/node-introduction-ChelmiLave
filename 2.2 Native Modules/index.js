// import fs module
const { error } = require('console');
const fs = require('fs');
//Using fs module create a file called message.txt and write a message in there
fs.writeFile("message.txt","Hello World", (err) => {
    if (err) throw err;
    console.log("The file was created");
});
//Using fs module read the  file creatd and ans show the output in the terminal
fs.readFile("message.txt","utf8", (err,data) => {
    if (err) throw err;
    console.log(data);
});