var Checkout = require('./Checkout');
const Tshirt = require('./model/Tshirt');
const Voucher = require('./model/Voucher');
const Mug = require('./model/Mug');


//Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT
//Total: 74.50€
(function init_Strategy() {
    let checkout = new Checkout("A")
    checkout.scan(new Voucher());
    checkout.scan(new Tshirt());
    checkout.scan(new Voucher());
    checkout.scan(new Voucher());
    checkout.scan(new Mug());
    checkout.scan(new Tshirt());
    checkout.scan(new Tshirt());

    console.log(checkout.total());

})();
