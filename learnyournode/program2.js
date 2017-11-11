//console.log(process.execPath)
//var myArray = process.argv
var arraylen = process.argv.length
//console.log(arraylen)
//process.argv.forEach((val, index) => {
 //   console.log(`${index}: ${val}`)

//  })
  var i = result = 0
  for (var i = 2; i < process.argv.length; i++) {
      result = result + Number(process.argv[i])
  }
  
  console.log(result)
 