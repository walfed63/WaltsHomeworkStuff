
const directfilter = require('./directoryreader.js')
const dirname = process.argv[2]
const filetype = process.argv[3]

directfilter(dirname, filetype,function(error,list) {
    if (error) {
        return console.log(error)
    }
    list.forEach(function(file){
        console.log(file)
    })
})
