var net = require('net')
//var strftime = require('strftime')

function zeroFill(i) {
 return (i < 10 ? '0' : '') + i
}

function now () {
 var strftime = require('strftime')
 var d = strftime('%F %H:%M', new Date())
 //console.log(new Date())
 /* return d.getFullYear() + '-'
   + zeroFill(d.getMonth() + 1) + '-'
   + zeroFill(d.getDate()) + ' '
   + zeroFill(d.getHours()) + ':'
   + zeroFill(d.getMinutes()) */
   return d
}

var server = net.createServer(function (socket) {
 socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))