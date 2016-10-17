const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const pug = require('pug');
const products = require('./routes/products.js');
const articles = require('./routes/articles.js');

//Set the tempalte engine to use pug
app.set('view engine', 'pug');

//Tell express where our template files live
app.set('views', './views');

app.use(express.static('./public'));


app.use(bodyParser.urlencoded({extended: true}));

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