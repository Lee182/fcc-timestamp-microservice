const moment = require('moment')
const http = require('http')
const url = require('url')

let port = process.env.PORT
if (port === undefined) {port = 3000}

const unix2natural = require('./unix2natural.js')
const app = http.createServer(function(req, res){
  let myres = {
    unix: null,
    natural: null
  }
  if (req.method === 'GET') {
    var str = url.parse(req.url).pathname.split('%20').join(' ').substr(1).trim()
    if (isNaN(str) === false) {str = Number(str)} else {
      str += ' UTC'
    }
    const d = new Date(str)
    if (d.toString() !== 'Invalid Date') {
      myres.unix = d.getTime()
      myres.natural = unix2natural(d.getTime())
      myres.roughly = moment(d).from(Date.now())
    }
  }
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  res.write(JSON.stringify(myres))
  res.end()
})

app.listen(port, function(a){
  console.log('server started at http://localhost:'+port+'/')
})
