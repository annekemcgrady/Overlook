import Hotel from '../src/Hotel';
import domUpdates from '../src/domUpdates'
import sampleBookings from '../src/sampleBookings'
import sampleRoomService from '../src/sampleRoomService'
var chai = require('chai');
var expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, [
  'displayAllTodayBookings'
], () => true);

describe('Hotel', function() {
  let hotel;
  let bookingsData = sampleBookings.bookings
  let orderData = sampleRoomService.roomServices
  let today = "17/11/2019";
  
  beforeEach(function() {
    hotel = new Hotel(today, bookingsData, orderData)
  }) 

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should select all bookings for a date', function() {
    expect(hotel.todayBookings).to.eql([99])
  });

  it('should select all room service orders for a date', function() {
    hotel = new Hotel("19/07/2019", bookingsData, orderData)
    expect(hotel.todayOrders).to.eql([
        { "date": "19/07/2019",
        "food": "Rustic Wooden Sandwich",
        "totalCost": 5.86,
        "userID": 98 }
      ])
  });

  it('should total sales of all orders for a date', function() {
    hotel = new Hotel("19/07/2019", bookingsData, orderData)
    expect(hotel.orderCostByDate()).to.equal(5.86)
  });

});

  