import Booking from '../src/Booking';
var chai = require('chai');
var expect = chai.expect;

describe('Booking', function() {
let booking;
let today = "17/11/2019";
let user = {id: 5, name: "Reginald Schaden"};

beforeEach(function() {
  booking = new Booking(user.id, today, 100)
}) 

it('should be a function', function() {
  expect(Booking).to.be.a('function');
});

it('should be an instance of Game', function() {
  expect(booking).to.be.an.instanceof(Booking);
});

it ('should have a user ID', function() {
  expect(booking.id).to.equal(5);
});

it('should have a date', function() {
  expect(booking.date).to.equal("17/11/2019");
});

it('should have a room number', function() {
  expect(booking.roomNumber).to.equal(100);
});

});