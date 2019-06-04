import Hotel from './Hotel'
import Booking from './Booking'
import domUpdates from './domUpdates';

class Order {
  constructor (id, date, food, cost) {
    this.id = id;
    this.date = date;
    this.food = food || [];
    this.totalCost = cost;
  }

}


export default Order