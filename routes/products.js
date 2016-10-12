const express = require ('express');

const router = express.Router();


const Products = require('../db/Products.js');



router.route('/')
  .get((req,res) =>{
    res.render('index', {
      products: Products.all()
    });
  });


//Route to New Product
router.route('/new')
  .get((req, res)=>{
    res.render('new', {
      products: Products.getById(req.params.id)
    });
  })
  .post((req,res) =>{
    //Add a unqiue ID for each item created..
    Products.add(req.body.name, req.body.price, req.body.inventory);
      res.redirect('http://localhost:3000/products' );
  });


//Route to Product ID
router.route('/:id')
  .get((req,res)=>{
    res.render('edit', {
      products: Products.getById(req.params.id)
    });
  })
  .post((req,res) =>{
    Products.update(req.params.id, req.body.name, req.body.price, req.body.inventory);
    res.render('edit', {
      products: Products.getById(req.params.id)
    });
  })
  .delete((req,res) =>{
    if(Products.delete(req.params.id)){
      res.json( {
      success: true
    });
    }else{
      res.json( {
      success: false
    });
    }
  });





module.exports = router;