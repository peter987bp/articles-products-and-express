const db = require('./connection.js');

module.exports = (function(){
  // ... functions declared and private variables?!
  // ...
  //...

  let products = [];
  let id = 1;


  //helper function to create a product
  function createProduct (products){
    console.log('productsINcreateproductfnct.: ', products);
    var productCreate ={
      "name": products.name,
      "price": parseFloat(products.price),
      "inventory": parseFloat(products.inventory),
    };
    return db.query('INSERT INTO products (name, price, inventory) VALUES( ${name}, ${price}, ${inventory})', productCreate)
    .catch(error =>{
      console.error('error: ', error);
    });
    console.log('createProduct: ', createProduct);
  }
  //---------Return All Products----------
  function _all(){
    return db.query('SELECT * FROM products')

    .catch(error =>{
      console.error('error: ', error);
    });
  }

  //this function adds all items to the array product
  function _add (name, price, inventory){
    let newProduct = products.every((element) =>{
      return element.name !== name;
    });
    //when the newword is not contained the above statment return false.
    if(newProduct){
      createProduct(name, price, inventory);
      return true;
    }else{
      return false;
    }
  }

  //-------UPDATE-------------------
  function _update(data){
    console.log('data: ', data);
    return db.query('UPDATE products SET name =${name}, price = ${price},inventory = ${inventory} WHERE name =${oldname}', data)
    .catch(error =>{

      console.error('error: ', error);
       return error;
    });
  }

  //-------DELETE-------------------
  function _delete(id) {
    console.log('id: ', id);
    return db.query('DELETE FROM products WHERE id =$1', id)
    .catch(error =>{
      console.error('error: ', error);
       return error;
    });
  }

  //-------GET BY ID-------------------
  function _getById (id){
    return db.query('SELECT * FROM products WHERE id = $1', id)
    .catch(error=>{
      console.error(error);
    });
  }

  return {
    all: _all,
    createProduct: createProduct,
    update: _update,
    delete: _delete,
    getById: _getById,
    products
    // editByTitle: _editByTitle
  };
})();