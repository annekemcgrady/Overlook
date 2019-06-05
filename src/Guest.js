import Booking from './Booking';
import Order from './Order';

class Guest {
  constructor(obj, dataB, dataO) { 
    this.name = obj.name;
    this.id = obj.id;
    this.allBookings = dataB;
    this.allOrders = dataO;
    this.bookings = this.pullAllBookings(this.id);
    this.orders = this.pullAllOrders(this.id)
    this.ordersTotalCost = this.calcTotalOrders()
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

makeOrder(id, date, food, cost) {
  let order = new Order(id, date, food, cost)
  this.orders.push(order)
}

calcTotalOrders() {
this.ordersTotalCost = this.orders.reduce((acc,order) => {
  return acc += order.totalCost
  },0)
  }

checkBookingByDate(givenDate) {
if(!this.bookings.filter(el => el.date === givenDate).length) {
  return false
} else { 
  return true
  }
}

deleteBooking(date,room) {
if(this.checkBookingByDate(date)) {
  let index = this.bookings.findIndex(el => el.roomNumber === room)
  return this.bookings.splice(index,1)
  }
}

};



export default Guest