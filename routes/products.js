
const express = require ('express');

const router = express.Router();


const Products = require('../db/Products.js');

//WORKS
router.route('/')
  .get((req,res) =>{
    Products.all()
    .then((products)=>{
      res.render('index', {
       products: products
      });
    });
  });


//WORKS
//Route to New Product
router.route('/new')
  .get((req, res)=>{
    Products.all()
    .then((products) =>{
      res.render('new', {
       products: products
     });
   });
  })

  //WORKS
  .post((req,res) =>{
    Products.createProduct(req.body)
      .then(()=>{
        res.redirect('/products' );
      });
  });

//WORKS
router.route('/:id')
  .get((req,res)=>{
    Products.getById(req.params.id)
    .then((product)=> {
      console.log('product: ', product);
       res.render('productID', {
      products: product[0]
    });
  });
});

//WORKS
//Route to Product ID
router.route('/:id/edit')
  .get((req,res)=>{
    Products.getById(req.params.id)
    .then((product) =>{
      res.render('edit', {
      products: product[0]
    });
  });
})

  .post((req,res) =>{
    Products.update(req.body)
      .then((product)=>{
        res.redirect(`/products/${req.params.id}`);
      });
  })

  .delete((req,res) =>{
    console.log('req.body: ', req.params.id);
    Products.delete(req.params.id)
      .then((product)=>{
        console.log('product: ', product);
        res.redirect('/products');
      });
  });





module.exports = router;