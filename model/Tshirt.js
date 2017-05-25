var Product = require('./Product');

class Tshirt extends Product{

  constructor(){
    super();
    this.price = 20;
    this.name = 'Tshirt';
  }

  getPrice() {
    return this.price;
  }
}
module.exports = Tshirt;
