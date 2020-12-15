const express = require('express');

const app = express();

app.use(express.static('public')); // html css js 합쳐줌

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/public/main.html');

});

app.get('/comment',(req, res) => {
    res.sendFile(__dirname + '/public/comment.html');  // html css만 넘어감
    
});

app.use('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(3000); 