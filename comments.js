// Create web server 
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Load comments from file
var comments = require('./comments.json');

// Return comments
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

// Add a comment
app.post('/api/comments', function(req, res) {
  var comment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text
        };
        comments.push(comment);
        fs.writeFileSync('./comments.json', JSON.stringify(comments, null, 2));
        res.json(comment);
    });
    