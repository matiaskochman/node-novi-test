var Product = require('./Product');

class Mug extends Product{

  constructor(){
    super();
    this.price = 7.5;
    this.name = 'Mug';
  }


  getPrice() {
    return this.price;
  }
}
module.exports = Mug;
