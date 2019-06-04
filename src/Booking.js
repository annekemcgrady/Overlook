import Hotel from './Hotel'
import Booking from './Booking'
import domUpdates from './domUpdates';

class Booking {
  constructor (id, date, room) {
    this.id = id;
    this.date = date;
    this.roomNumber = room;
  }

}


export default Booking