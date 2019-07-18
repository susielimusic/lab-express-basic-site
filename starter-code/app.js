var express = require('express');
var hbs = require('hbs')
var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


//my first route
app.get ('/', (req, res) =>{
    let character = {
        name: "susie",
        origin: "china"
    }
    res.render("home", {character})
})

// app.get ('/about', (req, res) =>{
//   res.sendFile('<h1>about us</h1>');
// })


// app.get ('/contact', (req, res) =>{
//   res.sendFile('<h1>contact us</h1>');
// })


app.listen(3001, () => {
console.log('My first app listening on port 3001!')
});