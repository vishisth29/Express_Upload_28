/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http')

var app = express();
var fileupload = require("express-fileupload");
var uploadTimeout = require("connect-timeout")
app.use(fileupload());
app.use(uploadTimeout(200000));
app.listen(8000, () => {
	console.log("Application started and Listening on port 8000");
  });
app.get('/', (req, res)=>{
	res.sendFile('/file_upload_form.html', {root: __dirname })
})
app.post('/success',(req, res)=>{
	var file;
	file = req.files.file;
	res.status(200).sendFile('/success.html', {root: __dirname })
} ); 
