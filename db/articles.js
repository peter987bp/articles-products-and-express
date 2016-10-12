module.exports = (function(){
  // ... functions declared and private variables?!
  // ...
  //...
  let products =[];

  function _all(){

    return products;
  }

  function _add (name, price, inventory){
    products.push(name);
  }



  return {
    all: _all,
    add: _add,
    // getByTitle: _getByTitle,
    // editByTitle: _editByTitle
  };
})();