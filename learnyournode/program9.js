var http = require('http')
var buflist = require('bl')

const out = []
let counter = 0

function printOut() {
    for (let j=0; j<3; j++) {
    console.log(out[j])
}
}

function getUrls(index) {

    http.get(process.argv[2 + index], (response)=> {
        response.pipe(buflist(function (error, data) {
            if (error) {
             return console.error(error)
            }
    
        out[index] = data.toString()
        counter ++
        if (counter == 3 ){
            printOut()
        }
 //   
    }))
    })
}   
for(let k=0;k<3; k++){
    getUrls(k)
} 