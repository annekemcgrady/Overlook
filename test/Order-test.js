import Order from '../src/Order';
var chai = require('chai');
var expect = chai.expect;

describe('Order', function() {
let order;
let today = "17/11/2019";
let user = {id: 5,name: "Reginald Schaden"};

beforeEach(function() {
  order = new Order(user.id, today, ['sandwich'])
}) 

it('should be a function', function() {
  expect(Order).to.be.a('function');
});

it('should be an instance of Game', function() {
  expect(order).to.be.an.instanceof(Order);
});

it ('should have a user ID', function() {
  expect(order.id).to.equal(5);
});

it('should have a date', function() {
  expect(order.date).to.equal("17/11/2019");
});

it('should have a room number', function() {
  expect(order.food).to.eql(['sandwich']);
});

});