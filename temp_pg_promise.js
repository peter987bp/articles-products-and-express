const Promise = require('bluebird');

const pgp = require('pg-promise')(
 {promiseLib: Promise}
  );


//1227.0.0.1 -> localhost
//db is being pass around to different files to use a query...

var db = pgp('postgres://ape_user:1234@localhost:5432/articles_products_and_express');

console.log(db);

db.query('SELECT * FROM articles')
  .then(articles =>{
    console.log('articles: ', articles);
  })
.catch(error =>{
  console.error('error: ', error);
})

//db.none("INSERT INTO documents(id, doc) VALUES(${id}, ${this})", doc)

let newArticle ={
  title: 'MY FIRST ARTICLE',
  body: 'BLAH BLUE BLUE',
  author: 'King author',
  url_title: 'MY%20FIRST%20ARTICLE'
};


db.query('INSERT INTO articles (title, body, author, url_title) VALUES (${title}, ${body}, ${author}, ${url_title})', newArticle )
  .then(console.log)
  .catch(error => {
    console.error(error);
  });

db.query('SELECT * FROM ARTICLES')
  .then(articles =>{
    console.log('articles: ', articles);
  })
  .catch(error =>{
    console.error('error: ', error);
  });