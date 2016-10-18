const db = require('./connection.js');

// //Database table create statement
// CREATE TABLE products(
// articles_products_and_express(# id serial PRIMARY KEY,
// articles_products_and_express(# name text,
// articles_products_and_express(# price integer,
// articles_products_and_express(# inventory integer);

module.exports = (function(){

  //function to create a product
  function _createArticle(articles){
    console.log('newArticleln7articles.js: ', articles);
    var articleCreate = {
      "title": articles.title,
      "body": articles.body,
      "author": articles.author,
      //NOT ENCODING
      "url_title": encodeURI(articles.title),
    };

    //create article and run query
    return db.query('INSERT INTO articles (title, body, author, url_title) VALUES (${title}, ${body}, ${author}, ${url_title})', articleCreate )
    .catch(error =>{
      console.error('error: ', error);
    });
    console.log('createArticle: ', createArticle);
  }
  //WORKS
  //---------Return All articles----------
  function _all(){

    return db.query('SELECT * FROM articles')

    .catch(error =>{

      console.error('error: ', error);
       return error;
    });
  }

  //-------UPDATE-------------------
  function _update(data){
    return db.query('UPDATE articles SET title =${title}, body = ${body},author = ${author} WHERE title =${oldtitle}', data)
     .catch(error =>{

      console.error('error: ', error);
       return error;
    });
  }

  //-------DELETE-------------------
  function _delete(title) {
    console.log('title: ', title);
    return db.query('DELETE FROM articles WHERE title = ${oldtitle}',title)
    .catch(error =>{

      console.error('error: ', error);
       return error;
    });
  }

  //-------GetByTitle-------------------
  function _getByTitle(title){
  return db.query('SELECT * FROM articles WHERE title = $1', title)
  .catch(error=>{
    console.error(error);
    return error;
  });
}
  return {
    createArticle: _createArticle,
    all: _all,
    update: _update,
    delete: _delete,
    getByTitle: _getByTitle
  };
})();