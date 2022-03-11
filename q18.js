// 18. WRITE NODE.JS CODE TO SHOW QUERYSITRNG DEMO.

const querystring = require('querystring');

const query = querystring.parse("department=BCA&year=SY&sem=4th")

console.log(`Department is : ${query.department}`);
console.log(`Year is : ${query.year}`);
console.log(`Semester is : ${query.sem}`);