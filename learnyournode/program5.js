var fs = require('fs')
var path = require('path')

let dirname = process.argv[2]
let filetype = process.argv[3]

//console.log(dirname)
//console.log(filetype)

function extend (element){
    var extName = path.extname(element)
    return extName == '.' + filetype
}
//console.log(extend) 
// diretory read Async 

    fs.readdir(dirname, function (error, list) {
        if (error) {
            throw error;
        }
        list.filter(extend).forEach(function(value) {
            console.log(value)
        })       
           
})