import Guest from '../src/Guest';
import Booking from '../src/Booking';
import domUpdates from '../src/domUpdates';
import Order from '../src/Order';
import sampleBookings from '../src/sampleBookings';
import sampleRoomService from '../src/sampleRoomService';
var chai = require('chai');
var expect = chai.expect;


describe('Guest', function() {
let guest;
let booking;
let bookingsData = sampleBookings.bookings
let orderData = sampleRoomService.roomServices
let today = "17/11/2019";
let user = {id: 5,
            name: "Reginald Schaden"
            };

beforeEach(function() {
  guest = new Guest(user, bookingsData, orderData)
}) 

it('should be a function', function() {
  expect(Guest).to.be.a('function');
});

it('should be an instance of Guest', function() {
  expect(guest).to.be.an.instanceof(Guest);
});

it('should have a name', function() {
  expect(guest.name).to.equal("Reginald Schaden");
});

it('should have an id', function() {
  expect(guest.id).to.equal(5);
});

it('should keep track of its own bookings', function() {
  expect(guest.bookings).to.eql([{ userID: 5, date: '31/08/2019', roomNumber: 8 }])
})

it('should keep track of its own room service orders', function() {
  expect(guest.orders).to.eql([{
    userID: 5,
    date: "21/10/2019",
    food: "Generic Plastic Sandwich",
    totalCost: 9.48
    },
   {
    userID: 5,
    date: "17/12/2019",
    food: "Ergonomic Fresh Sandwich",
    totalCost: 19.16,
    }])
})

it('should be able to make a booking', function(){
  expect(guest.bookings.length).to.equal(1)
  guest.makeBooking(this.id, today, 100)
  expect(guest.bookings.length).to.equal(2)
})

it('should be able to make a room service order', function(){
  expect(guest.orders.length).to.equal(2)
  guest.makeOrder(this.id, today, ["food"])
  expect(guest.orders.length).to.equal(3)
})

it('should calculate total of all room service charges ever', function(){
expect(guest.calcTotalOrders()).to.equal(28.64)

})

});