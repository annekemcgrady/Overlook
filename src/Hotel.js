import domUpdates from './domUpdates';


class Hotel {
  constructor(date, allUsers, allBookings, allOrders, allRooms) {
    this.date = date;
    this.allUsers = allUsers;
    this.allBookings = allBookings;
    this.allOrders = allOrders;
    this.allRooms = allRooms;
    this.todayBookings = this.roomsBookedToday(date);
    this.todayOrders = this.ordersByDate(date);
    this.totalSales = this.totalOfSales(date)
    this.todayOrderSalesTotal = this.orderCostByDate(date);
    this.mostBooked = this.findMostBookedDate();
    this.leastBooked = this.findLeastBookedDate();
  }

  roomsBookedToday(date){
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

findMostBookedDate() {
  let final = Object.values(this.allBookings).flat()
  let final2 = final.reduce((acc,el) => {
    if(!acc[el.date]) {
      acc[el.date] = 1
    } else {
      acc[el.date]++
    }
  return acc
  },{})
  
  return Object.keys(final2).shift()
}

findLeastBookedDate(){
  let final = Object.values(this.allBookings).flat()
  let final2 = final.reduce((acc,el) => {
    if(!acc[el.date]) {
      acc[el.date] = 1
    } else {
      acc[el.date]++
    }
    return acc
    },{})
    return Object.keys(final2).pop()
}

findAvailableRoomsByDate(date) {
  let booked = this.roomsBookedToday(date);
  return Object.values(this.allRooms).filter(el => !booked.includes(el.number));
  }

  filterAvailableRoomByType(date,type) {
   return this.findAvailableRoomsByDate(date).filter(room => room.roomType === type)
  }

  totalOfSales(date) {
  let orderSales = this.orderCostByDate(date)
   let roomSales = this.allRooms.reduce((acc, room) => {
      this.todayBookings.forEach(booking => {
        if(room.number === booking) {
          acc += room.costPerNight
        }
      })
      return acc
   },0)
   return roomSales + orderSales
   }

};







export default Hotel;