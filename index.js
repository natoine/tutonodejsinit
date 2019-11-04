var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
  })

app.get('/user/:name', function(req, res) {
	var age=''+req.query.age;
	if(age!=="undefined" && age.trim().length){
	res.send('Hello '  + req.params.name + ' tu as ' + age +' ans');
	}else{
	(res.send('Hello '  + req.params.name));
	}
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });
  