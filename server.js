var express = require('express');
var app = express();
app.get('*', function(request, response){
    if (!request.url) request.url = 'index.html'
    response.sendFile(__dirname + '/dist' + request.url)
    // response.send('Hello!');
})
app.listen(8888, 'localhost', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Server runing at http://localhost:8888/")
    }
})
