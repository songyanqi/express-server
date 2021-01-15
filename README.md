# express-server
新建一个文件夹 index  创建文件index.html
var express = require('express');
var app = express();
app.get('*', function(request, response){
    if (!request.url) request.url = 'index.html'
    response.sendFile(__dirname + '/shareRoom' + request.url)
    // response.send('Hello!');
})
app.listen(8888, "192.168.1.155", function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Server runing at http://192.168.1.155:8888/")
    }
})
