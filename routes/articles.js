

const express = require ('express');

const router = express.Router();


const Articles = require('../db/Articles.js');



///WORKS
router.route('/')
  .get((req,res) =>{
    Articles.all()
    .then((articles) =>{
      res.render('articles', {
        articles: articles
      });
    });
  });


//Route to New Articles
router.route('/new')
  .get((req, res)=>{
      Articles.all()
      .then((articles)=>{
        res.render('articlesNew', {
         articles: articles
        });
      });
  })

  ///WORKS
  .post((req,res) =>{
    Articles.createArticle(req.body)
      .then(()=>{
        res.redirect('/articles' );
      });
  });
  //WORKS
//Route to Article title
router.route('/:title')
  .get((req,res)=>{
    Articles.getByTitle(req.params.title)
      .then((article)=>{
      res.render('articlesTitle', {
        articles: article[0]
      });
    });

  });

//WORKS
//Route to Articles ID
router.route('/:title/edit')
  .get((req,res)=>{
    console.log('req.bodyget: ', req.body);
    Articles.getByTitle(req.params.title)
      .then((article)=>{
       res.render('articlesEdit', {
        articles: article[0]
      });
    });
  })
  //WORKS
  .post((req,res) =>{
    console.log('req.bodypost: ', req.body);
    Articles.update(req.body)
      .then((article) =>{
         res.redirect(`/articles/${req.body.title}`);
      });
  })

  //NEED delete functionality to work on webpage
  .delete((req,res) =>{
    console.log('req.bodydelete: ', req.body);
    Articles.delete(req.body)
      .then((article) =>{
         res.redirect(`/articles`);
      });
  });





module.exports = router;