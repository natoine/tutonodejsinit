var express = require("express")/* npm install express */
var csv = require('csv-express')/* npm install csv-express*/
var fetchUrl = require("fetch").fetchUrl

const fs = require('fs')

var app = express();

app.get('/', function (req, res) {
    res.send('Hello, vous êtes à la racine de ce serveur ! allez voir /index')
  })

//API

app.get('/user/:name', function(req, res) {
	var age=''+req.query.age;
	if(age!=="undefined" && age.trim().length){
	res.send('Hello '  + req.params.name + ' tu as ' + age +' ans');
	}else{
	(res.send('Hello '  + req.params.name));
	}
})

app.get('/names', function(req,res) {
	res.format({
        'application/json': function () {
            res.json([{name : 'toto'}, {name : 'baptiste'}, {name : 'gabriel'}]);
        },

        'application/csv': function () {
            res.csv([{name : 'toto'}, {name : 'baptiste'}, {name : 'gabriel'}]);
        }
    })
})

app.get('/ehpads' ,function(req,res){
    var url = "https://www.pour-les-personnes-agees.gouv.fr/annuaire-ehpad-en-hebergement-permanent/34/0"
    fetchUrl(url , function(error, meta, body){
        res.write(body.toString())
        res.end()
    })
})

//static ressources

app.get('/index', function(req,res) {
	fs.readFile('index.html', function(err, html) {
	if(err){throw err;}
	res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(html)
            res.end()
	})

})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });