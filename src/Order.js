import Hotel from './Hotel'
import Booking from './Booking'
import domUpdates from './domUpdates';

class Order {
  constructor (id, date, food) {
    this.id = id;
    this.date = date;
    this.food = food || [];
  }

}


export default Order