var fs = require('fs')
var path = require('path')


 module.exports=function(dirname, filetype, callback){
    fs.readdir(dirname, function (error, list) {
        if (error) {
          return callback(error)
        }
        list =list.filter(function(file) {
           return path.extname(file) == '.' + filetype
        })   
        callback(null, list)              
})
}
