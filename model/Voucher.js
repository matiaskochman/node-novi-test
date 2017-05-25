var Product = require('./Product');

class Voucher extends Product{

  constructor(){
    super();
    this.price = 5;
    this.name = 'Voucher';
  }


  getPrice() {
    return this.price;
  }
}
module.exports = Voucher;
