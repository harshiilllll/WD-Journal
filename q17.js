// 17. WRITE NODE.JS CODE TO CREATE A MODULE CALLED mymodule WHICH CONTAIN (square() and cube()).

const calc = require("./mymodule");

console.log(`Square is ` + calc.square(100));
console.log(`Cube is ` + calc.cube(100));
