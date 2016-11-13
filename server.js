var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000
 
// express.static built-in middleware function 
// får på en eller anden måde ingreret webpack paths med server (localhost)
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
  // res.send('Hello World')
  res.sendFile(__dirname + '/index.html')
})

//listen port and error checking
app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});