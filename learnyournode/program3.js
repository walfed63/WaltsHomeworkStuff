var fs = require('fs')

let filename = process.argv[2]
// console.log(filename)
// fs.readFileSync(filename)
var test = fs.readFileSync(filename)
var numline = test.toString().split('\n').length - 1
//console.log(test)

 console.log(numline)