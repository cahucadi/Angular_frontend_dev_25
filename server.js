const path = require('path');
const express = require('express');

const app = express(__asyncDelegator);

app.use(express.static(_dirname + 'dist/frontend'));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname+'dist/frontend/index.html'))
});

app.listen(process.env.PORT || 5000 );