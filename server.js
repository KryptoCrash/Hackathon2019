var express = require('express');
var app = express();
var server = require('http').Server(app);

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/client/index.html')
})
app.use('/client',express.static(__dirname+'/client'));

server.listen(8000, () => {
    console.log(`App now listening on port 8000`);
    
});