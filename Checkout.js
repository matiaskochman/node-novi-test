var PriceStrategy1 = require('./strategy/PriceStrategy1');

class Checkout {

    constructor(type){
        switch(type) {
            case "A":
                this.strategy = new PriceStrategy1();
                break;

            default:
                this.strategy = new PriceStrategy1();
        }
    }

    scan(type) {
      return this.strategy.scan(type);
    }

    total(){
      return this.strategy.total();
    }
}
module.exports = Checkout;
