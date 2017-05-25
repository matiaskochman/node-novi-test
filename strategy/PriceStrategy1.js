const Tshirt = require('../model/Tshirt');
const Voucher = require('./../model/Voucher');
const Mug = require('./../model/Mug');
const Strategy = require('./Strategy');

const tshirtDiscountPrice = 19;
class PriceStrategy1 extends Strategy{

    constructor() {
        super()
        this.tshirts = [];
        this.vouchers = [];
        this.mugs = [];
    }

    scan(product){
      if(product instanceof Tshirt){
        this.tshirts.push(product);
      }else if(product instanceof Mug){
        this.mugs.push(product);
      }else if(product instanceof Voucher){
        this.vouchers.push(product);
      }
    }

    total(){
      var total = 0;
      debugger;
      if(this.tshirts.length>=3){

        var temp = this.tshirts.length * tshirtDiscountPrice;
  			total = total + temp;
  		}else if(this.tshirts.length>0){
  			total = this.tshirts[0].getPrice() * this.tshirts.length;
  		}

      if(this.vouchers.length>0){
        var x = this.vouchers.length;
        var price = this.vouchers[0].getPrice();
  			if(this.vouchers.length % 2 == 0){
  				total = total + Math.floor(x/2) * price;
  			}else if(this.vouchers.length > 2){
  				total = total + (Math.floor(x/2) * this.vouchers[0].getPrice()) + price ;
  			}else{
  				total = total + this.vouchers[0].getPrice();
  			}
  		}
      debugger;
  		if(this.mugs.length>0){
  			total = total + this.mugs.length * this.mugs[0].getPrice();
  		}
  		return total;

    }
}
module.exports = PriceStrategy1;
