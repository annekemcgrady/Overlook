import Hotel from '../src/Hotel';
import domUpdates from '../src/domUpdates'
import sampleUsers from '../src/sampleUsers'
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
  let usersData = sampleUsers.users;
  let bookingsData = sampleBookings.bookings
  let orderData = sampleRoomService.roomServices
  let today = "17/11/2019";
  
  beforeEach(function() {
    hotel = new Hotel(today, usersData, bookingsData, orderData)
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
    hotel = new Hotel("19/07/2019", usersData, bookingsData, orderData)
    expect(hotel.todayOrders).to.eql([
        { "date": "19/07/2019",
        "food": "Rustic Wooden Sandwich",
        "totalCost": 5.86,
        "userID": 98 }
      ])
  });

  it('should total sales of all orders for a date', function() {
    hotel = new Hotel("19/07/2019", usersData, bookingsData, orderData)
    expect(hotel.todayOrderSalesTotal).to.equal(5.86)
  });

  it('should find a user by name and return the user object', function() {
    expect(hotel.findCurrentGuestByName("Reginald Schaden")).to.eql({id: 5, name: "Reginald Schaden"})
  })

  it('should find the date with the most bookings', function() {
    expect(hotel.findMostBookedDate()).to.eql('21/08/2019')
  })

  it('should find the date with the least bookings', function() {
    expect(hotel.findLeastBookedDate()).to.eql('22/09/2019')
  })

});

  