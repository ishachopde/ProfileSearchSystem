// server.js
const express = require('express');
const app = express();
//var videos = require('./routes/index');

// Run the app by serving the static files
// in the dist directory
/*app.use(express.static(__dirname + '/src/app/components/profile.component.html'));
// Start the app by listening on the default
// Heroku port


const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
*/
app.get("/", function(req,res){
	res.render("/app/components/profile.component.html");
});

app.listen(process.env.PORT || 8080);
//app.use(forceSSL());