const expect = require('expect');
const {Mug} = require('./../model/Mug');
const {Tshirt} = require('./../model/Tshirt');
const {Voucher} = require('./../model/Voucher');

describe('Checkout ',()=>{

  it('should list todos',()=>{
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res)=>{
        expect(res.body.todos.length).toBe(2);
      })
      .end();
  });
});
