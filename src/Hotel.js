import domUpdates from './domUpdates';


class Hotel {
  constructor(date, allUsers, allBookings, allOrders) {
    this.date = date;
    this.allUsers = allUsers;
    this.allBookings = allBookings;
    this.allOrders = allOrders;
    this.todayBookings = this.roomsBookedByDate(date);
    this.todayOrders = this.ordersByDate(date);
    this.todayOrderSalesTotal = this.orderCostByDate(date);
  }

  roomsBookedByDate(date){
    return this.allBookings.filter(booking => booking.date === date).map(obj =>obj.roomNumber) 
  }

  ordersByDate(date) {
    return this.allOrders.filter(order => order.date === date) 
  }

  orderCostByDate(date) {
  return this.allOrders.reduce((acc,order) => {
    if (order.date === date) {
      acc += order.totalCost
    }

return acc
},0)
}

findCurrentGuestByName(currentName) {
  return this.allUsers.find(user => user.name.toUpperCase() === currentName.toUpperCase())
}


};







export default Hotel;