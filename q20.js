// 20. WRITE NODE.JS CODE TO UPDATE A FILE NAME MYDATA.TXT (USE ALL POSSIBLE MEHTODS).

const fs = require("fs");

fs.rename("MYDATA.txt", "DATAFILE.txt", () => {
  console.log("Renamed successfully");
});
