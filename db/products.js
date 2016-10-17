

module.exports = (function(){
  // ... functions declared and private variables?!
  // ...
  //...

  let products = [];
  let id = 1;


  //helper function to create a product
  function createProduct (name, price, inventory){
    var productCreate ={
      "id": id,
      "name": name,
      "price": parseInt(price),
      "inventory": parseInt(inventory),
    };
    return db.query('INSERT INTO products (id, name, price, inventory VALUES(${id}, ${}, ${author}, ${url_title})', createProduct)
    .catch
    id += 1;
  }
  //---------Return All Products----------
  function _all(){

    return products;
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
    console.log('productsDB: ', products);
  }

  //-------UPDATE-------------------
  function _update(id, name, price, inventory){
    for(var x= 0; x<products.length; x++){
      if(products[x].id === parseInt(id)){
        console.log('products[x]: ', products[x]);
        products[x].name = name;
        products[x].price = price;
        products[x].inventory = inventory;
        console.log('aftermutation: ', products[x]);
        return true;
      }
    }
  }

  //-------DELETE-------------------
  function _delete(id) {
    for(var x= 0; x<products.length; x++){
      if(products[x].id === parseInt(id)){
      var indexOfSplice = products.indexOf(products[x]);
      products.splice(indexOfSplice,1);
      return true;
      }else{
      return false;
      }
    }
  }

  //-------GET BY ID-------------------
  function _getById (id){
    for(var x= 0; x<products.length; x++){
      if(products[x].id === parseInt(id)){
        return products[x];
      }
    }
  }

  return {
    all: _all,
    add: _add,
    update: _update,
    delete: _delete,
    getById: _getById,
    products
    // editByTitle: _editByTitle
  };
})();