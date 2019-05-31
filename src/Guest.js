import Hotel from './Hotel'; 
import Booking from './Booking';
import Order from './Order';
import domUpdates from './domUpdates';


class Guest {
  constructor(obj, dataB, dataO) { 
    this.name = obj.name;
    this.id = obj.id;
    this.allBookings = dataB;
    this.allOrders = dataO;
    this.bookings = this.pullAllBookings(this.id);
    this.orders = this.pullAllOrders(this.id)
}

pullAllBookings(num) {
  return this.allBookings.filter(booking => booking.userID === num)
}

pullAllOrders(num) {
  return this.allOrders.filter(order => order.userID === num)
}

makeBooking(id, date, room) {
  let booking = new Booking(id, date, room)
  this.bookings.push(booking)
}

makeOrder(id, date, food) {
  let order = new Order(id, date, food)
  this.orders.push(order)
}

};






export default Guest