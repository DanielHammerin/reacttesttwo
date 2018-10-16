// Server file for Boardster pages.

var express = require('express'),
    app = express(),
    port = 3000;

app.listen(port);
console.log('Boardster RESTful API server started on port: ' + port);
console.log('Server listening...');
