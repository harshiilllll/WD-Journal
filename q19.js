// 19. WRITE NODE.JS CODE TO CREATE A FILE NAME MYDATA.TXT (USE ALL POSSIBLE METHODS).

const fs = require("fs");

//using appendFile() method..
fs.appendFile("MYDATA.txt", "hello", (err) => {
  if (err) throw err;
  else console.log("File created using appendFile()...");
});

//using appendFileSync() method..
fs.open("MYDATA.txt", "w", (err) => {
  if (err) throw err;
  else console.log("File created using open()...");
});

//using writeFile() method..
fs.writeFile("MYDATA.txt", "helloo", (err) => {
  if (err) throw err;
  else console.log("File created using writeFile()...");
});
