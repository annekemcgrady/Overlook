import Guest from '../src/Guest';
import Booking from '../src/Booking';
import domUpdates from '../src/domUpdates';
import Order from '../src/Order';
import sampleBookings from '../src/sampleBookings';
import sampleRoomService from '../src/sampleRoomService';
var chai = require('chai');
var expect = chai.expect;


describe('Order', function() {
let order;
let bookingsData = sampleBookings.bookings
let orderData = sampleRoomService.roomServices
let today = "17/11/2019";
let user = {id: 5,
            name: "Reginald Schaden"
            };

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