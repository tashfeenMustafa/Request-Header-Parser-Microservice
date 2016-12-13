var express = require('express')
var app = express()
var path = require('path')
var routes = require('./api/index.js')

var port = process.env.PORT || 8080

app.use(express.static(path.resolve(__dirname, 'client')))

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*")
    response.header("Access-Control-Allow-Methods", "GET")
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

routes(app)

app.listen(port, function() {
    console.log('Listening on port %d...', port)
})
