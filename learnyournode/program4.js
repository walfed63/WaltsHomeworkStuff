var fs = require('fs')

let filename = process.argv[2]
//console.log(filename)
// File read Async 

    fs.readFile(filename, function (error, data) {
        if (error) {throw error;}
        var numlines = data.toString().split("\n").length-1
            console.log(numlines)
})
    
//console.log(test)
