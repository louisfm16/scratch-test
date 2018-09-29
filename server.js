const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.get('/' , (req, res) => {
    res.sendFile('main.html', {root: __dirname + '/'});
});

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});
