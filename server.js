const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const pug = require('pug');
const products = require('./routes/products.js');
const articles = require('./routes/articles.js');
const methodOverride = require('method-override');

//Set the tempalte engine to use pug
app.set('view engine', 'pug');

//Tell express where our template files live
app.set('views', './views');

app.use(express.static('./public'));


app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use('/products', products);
app.use('/articles', articles);

app.get('/', (req,res) =>{
  //Use res.render to render static HTML file
  res.render('layout.pug', {
    products: products.all,
  });
});



const server = app.listen(PORT, ()=>{
  console.log(`Server started on ${PORT}`);
});